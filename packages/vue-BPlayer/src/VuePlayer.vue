<template>
  <div class="qun-player" ref="container" @mouseover="isClearMode = false" @click.stop="clearModeTogger">
    <!--模拟poster -->
    <div class="_poster" :style="{ backgroundImage: `url(${options.cover})` }" v-show="!isPlaying && isStart"></div>
    <template>
      <video
        class="b_video-ref"
        webkit-playsinline
        playsinline
        x5-video-player-fullscreen="false"
        x-webkit-airplay="allow"
        x5-video-player-type="h5"
        x5-video-orientation="landscape"
        crossorigin="anonymous"
        ref="video"
        tabindex="-1"
        :muted="options.muted"
        :loop="options.loop"
        :preload="options.preload"
        :poster="options.cover"
      >
        <source v-for="(item, index) in vUrl" :key="index" :src="item" :type="`video/${getUrlType(item)}`" />
        Your browser does not support the video element.
      </video>
      <transition name="fade-center">
        <PlayBtn
          :isPlaying.sync="isPlaying"
          :isStart.sync="isStart"
          :isWaiting.sync="isWaiting"
          v-show="!isClearMode"
        />
      </transition>
      <transition name="fade-bottom">
        <BaseControls
          @paused="handlePaused"
          @play="handlePlay"
          @wait="handleWait"
          @canplay="handleCanplay"
          v-show="!isClearMode"
        />
      </transition>
    </template>
  </div>
</template>
<script>
import BaseControls from './BaseControls';
import PlayBtn from './PlayBtn';
const VERSION = require('../../../package.json').version;

export default {
  name: 'VueBPlayer',
  components: {
    BaseControls,
    PlayBtn
  },
  props: {
    video: {
      type: Object,
      default: function () {
        return {};
      }
    },
    mutex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      baseVideo: {
        url: '',
        cover: '',
        muted: true,
        loop: false,
        preload: 'auto',
        poster: '',
        volume: 1,
        autoplay: false
      },
      $video: null,
      $container: null,
      clearModeTimer: null,
      isStart: true,
      isWaiting: true,
      isPlaying: false,
      isMove: false,
      isClearMode: false
    };
  },
  watch: {
    isPlaying() {
      this.play();
    }
  },
  computed: {
    vUrl() {
      let url = this.video.url || [];
      if (typeof url === 'string') {
        url = [url];
      } else if (Object.prototype.toString.call(url) === '[object Object]') {
        console.warn(new Error('视频URL只接受String或者Array'));
        return [];
      }
      return url;
    },
    // 合并默认和用户自定义属性配置
    options() {
      return Object.assign({}, this.baseVideo, this.video);
    }
  },
  methods: {
    getUrlType(url) {
      let u = url.split('?')[0] + '?v=1';
      return u.match(/[^\.]+(?=\?)/) || 'mp4';
    },
    init() {
      this.$video = this.$refs.video;
      this.$container = this.$refs.container;
      this.isPlaying = true;
      this.$video.load();
      this.initPlayer();
      this.$emit('ready');
      setTimeout(() => {
        this.isPlaying = this.options.autoplay;
      }, 300);
    },
    initPlayer() {
      this.$video.volume = this.options.volume;
      setTimeout(() => {
        this.$video.muted = false;
      }, 500);
    },
    clearModeTogger() {
      if (this.isStart || !this.isPlaying) return;
      this.isClearMode = !this.isClearMode;
      if (!this.isClearMode) {
        this.setClearModeTimer();
      }
    },
    setClearModeTimer() {
      if (this.clearModeTimer) {
        clearTimeout(this.clearModeTimer);
      }
      this.clearModeTimer = setTimeout(() => {
        if (this.isMove || !this.isPlaying) return;
        this.isClearMode = true;
        this.$emit('clearMode');
      }, 3000);
    },
    pauseAllVideo() {
      if (this.mutex) {
        const videos = document.querySelectorAll('video:not(.b_video-ref)');
        videos.forEach((v) => {
          v.pause && v.pause();
        });
      }
    },
    play() {
      if (this.isPlaying) {
        this.pauseAllVideo();
        this.$video
          .play()
          .then(() => {
            this.setClearModeTimer();
          })
          .catch((e) => {});
      } else {
        this.$video.pause();
      }
      this.$emit('videoPlay', this.isPlaying);
    },
    handleCanplay() {
      this.isWaiting = false;
    },
    handleWait() {
      this.isWaiting = true;
    },
    handlePaused() {
      this.isPlaying = false;
    },
    handlePlay() {
      this.isPlaying = true;
    }
  },
  created() {
    this.$emit('created');
    this.$nextTick(() => {
      this.init();
    });
  },

  mounted() {
    this.$emit('mounted');
    console.log(
      '\n' + ' %c vue-bplayer v' + VERSION + ' %c https://github.com/boboyaohuo/vue-bplayer ' + '\n',
      'color: #ff461a; background: #f5f5f5; padding:6px 0;',
      'background: #f5f5f5; padding:6px 0;'
    );
  },
  updated() {},
  beforeDestroy() {
    this.$emit('beforeDestroy');
  },
  destroyed() {
    this.$emit('destroyed');
  }
};
</script>
<style lang="stylus" scoped>
.qun-player {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background: #000;
  overflow: hidden;
  &:fullscreen,
  &:-webkit-full-screen,
  &:-moz-full-screen,
  &:-ms-fullscreen {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100000;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    transform: translate(0, 0);
  }
  ._poster {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
  }
  .b_video-ref {
    display: block;
    background: #000;
    width: 100%;
    height: 100%;
    z-index: 1;
    outline: none;
    /* object-fit: cover; */
    &::-webkit-media-controls,
    &::-webkit-media-controls-enclosure {
      display: none !important;
    }
  }
}
.fade-center-enter-active,
.fade-cneter-leave-active {
  transition: opacity 0.5s;
}
.fade-center-enter, .fade-center-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-bottom-enter-active,
.fade-bottom-leave-active {
  transition: bottom 0.5s;
}
.fade-bottom-enter, .fade-bottom-leave-to /* .fade-leave-active below version 2.1.8 */ {
  bottom: -3em;
}
</style>
