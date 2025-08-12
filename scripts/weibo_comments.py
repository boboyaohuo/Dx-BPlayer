import argparse
import json
import sys
import time
from dataclasses import dataclass, asdict
from typing import Dict, Iterable, List, Optional, Tuple
from urllib.parse import quote

import requests
import re


MWEIBO_SEARCH_URL = (
    "https://m.weibo.cn/api/container/getIndex?containerid=100103type%3D1%26q%3D{q}&page_type=searchall&page={page}"
)
MWEIBO_COMMENTS_URL = (
    "https://m.weibo.cn/comments/hotflow?id={status_id}&mid={status_id}&max_id_type={max_id_type}{max_id_qs}"
)


def _build_session() -> requests.Session:
    session = requests.Session()
    session.headers.update(
        {
            # Mobile UA improves chances of JSON API responses
            "User-Agent": (
                "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) "
                "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 "
                "Mobile/15E148 Safari/604.1"
            ),
            "Referer": "https://m.weibo.cn/",
            "Accept": "application/json, text/plain, */*",
        }
    )
    return session


_TAG_RE = re.compile(r"<[^>]+>")


def strip_html(html_text: str) -> str:
    if not html_text:
        return ""
    # Remove HTML tags
    no_tags = _TAG_RE.sub("", html_text)
    # Unescape basic entities manually to avoid bringing in html module if not needed
    return (
        no_tags.replace("&amp;", "&")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&quot;", '"')
        .replace("&#39;", "'")
        .strip()
    )


@dataclass
class WeiboPost:
    id: str
    text: str
    created_at: str
    user_screen_name: str
    reposts_count: int
    comments_count: int
    attitudes_count: int


@dataclass
class WeiboComment:
    id: str
    text: str
    like_count: int
    user_screen_name: str
    created_at: str


def search_weibo_posts(
    session: requests.Session, keyword: str, pages: int
) -> List[WeiboPost]:
    encoded_q = quote(keyword)
    results: List[WeiboPost] = []
    for page in range(1, pages + 1):
        url = MWEIBO_SEARCH_URL.format(q=encoded_q, page=page)
        try:
            resp = session.get(url, timeout=15)
            if resp.status_code != 200:
                continue
            data = resp.json()
        except Exception:
            continue

        cards = data.get("data", {}).get("cards", [])
        for card in cards:
            # posts are usually card_type 9
            if card.get("card_type") != 9:
                continue
            mblog = card.get("mblog") or {}
            status_id = str(mblog.get("id")) if mblog.get("id") is not None else None
            if not status_id:
                continue
            results.append(
                WeiboPost(
                    id=status_id,
                    text=strip_html(mblog.get("text", "")),
                    created_at=str(mblog.get("created_at", "")),
                    user_screen_name=str(mblog.get("user", {}).get("screen_name", "")),
                    reposts_count=int(mblog.get("reposts_count", 0) or 0),
                    comments_count=int(mblog.get("comments_count", 0) or 0),
                    attitudes_count=int(mblog.get("attitudes_count", 0) or 0),
                )
            )
        # be polite
        time.sleep(0.6)
    return results


def fetch_hot_comments(
    session: requests.Session, status_id: str, max_pages: int, per_page_limit: Optional[int]
) -> List[WeiboComment]:
    comments: List[WeiboComment] = []
    max_id: Optional[int] = None
    max_id_type: int = 0

    for _ in range(max_pages):
        max_id_qs = f"&max_id={max_id}" if max_id is not None else ""
        url = MWEIBO_COMMENTS_URL.format(
            status_id=status_id, max_id_type=max_id_type, max_id_qs=max_id_qs
        )
        try:
            resp = session.get(url, timeout=15)
            if resp.status_code != 200:
                break
            payload = resp.json()
        except Exception:
            break

        if payload.get("ok") != 1:
            break

        data_block = payload.get("data", {})
        items = data_block.get("data", [])
        for item in items:
            try:
                comments.append(
                    WeiboComment(
                        id=str(item.get("id")),
                        text=strip_html(item.get("text", "")),
                        like_count=int(item.get("like_count", 0) or 0),
                        user_screen_name=str(item.get("user", {}).get("screen_name", "")),
                        created_at=str(item.get("created_at", "")),
                    )
                )
                if per_page_limit and len(comments) >= per_page_limit:
                    return comments
            except Exception:
                continue

        max_id = data_block.get("max_id")
        max_id_type = int(data_block.get("max_id_type", 0) or 0)
        if not max_id:
            break
        # small delay
        time.sleep(0.5)

    return comments


def run(keyword: str, num_posts: int, pages: int, comments_per_post: int, output: str) -> Dict:
    session = _build_session()

    posts = search_weibo_posts(session, keyword=keyword, pages=pages)
    # Deduplicate by id while preserving order
    seen: set = set()
    unique_posts: List[WeiboPost] = []
    for p in posts:
        if p.id in seen:
            continue
        seen.add(p.id)
        unique_posts.append(p)
        if len(unique_posts) >= num_posts:
            break

    result: Dict[str, Dict] = {
        "keyword": keyword,
        "total_posts_considered": len(unique_posts),
        "items": [],
    }

    for post in unique_posts:
        comments = fetch_hot_comments(
            session=session,
            status_id=post.id,
            max_pages=10,
            per_page_limit=comments_per_post,
        )
        result["items"].append(
            {
                "post": asdict(post),
                "comments": [asdict(c) for c in comments],
            }
        )
        # courteous delay between posts
        time.sleep(0.7)

    # Persist
    with open(output, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    return result


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(
        description="Fetch Weibo hot comments for a keyword via mobile JSON APIs"
    )
    parser.add_argument("--keyword", default="鬼灭之刃", help="Search keyword")
    parser.add_argument("--num-posts", type=int, default=5, help="Number of posts")
    parser.add_argument(
        "--pages", type=int, default=3, help="How many search pages to scan"
    )
    parser.add_argument(
        "--comments-per-post",
        type=int,
        default=20,
        help="Max comments per post to collect",
    )
    parser.add_argument(
        "--output",
        default="/workspace/output/weibo_comments.json",
        help="Output JSON path",
    )
    args = parser.parse_args(argv)

    try:
        result = run(
            keyword=args.keyword,
            num_posts=args.num_posts,
            pages=args.pages,
            comments_per_post=args.comments_per_post,
            output=args.output,
        )
    except Exception as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1

    # Print small summary to stdout
    total_comments = sum(len(item["comments"]) for item in result["items"])
    print(
        json.dumps(
            {
                "keyword": result["keyword"],
                "posts": len(result["items"]),
                "comments": total_comments,
                "output": args.output,
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())