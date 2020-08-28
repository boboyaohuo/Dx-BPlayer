<template>
  <div
    class="dx-bplayer"
    :class="[isFixed ? 'fixed' : '', isHorizontal ? 'fullscreen' : '']"
    ref="bplayer_container"
    @click.stop="clearModeTogger"
  >
    <div
      class="bplayer_poster"
      :style="{ backgroundImage: `url(${options.cover})` }"
      v-show="!isPlaying && isStart"
    ></div>
    <template>
      <video
        class="bplayer-video"
        id="bplayer-video"
        webkit-playsinline
        playsinline
        x5-video-player-fullscreen="false"
        x-webkit-airplay="allow"
        x5-video-player-type="h5"
        x5-video-orientation="landscape"
        ref="bplayer_video"
        :muted="options.muted"
        :loop="options.loop"
        :preload="options.preload"
      >
        <source :src="options.url" :type="`video/${getUrlType(options.url)}`" />
        Your browser does not support the video element.
      </video>
      <div v-show="!isFixed">
        <transition name="fade-center">
          <StartBtn v-if="isStart || isWaiting" :isStart="isStart" :isWaiting="isWaiting" @play="handlePlay" />
        </transition>
        <transition name="fade-bottom">
          <BaseControls
            :isPlaying="isPlaying"
            @pause="handlePause"
            @play="handlePlay"
            @wait="handleWait"
            @canplay="handleCanplay"
            @fullscreen="handleFullscreen"
            v-show="!isClearMode && !isStart"
          />
        </transition>
      </div>
      <transition name="fade-center">
        <div class="bplayer_slider" v-if="(isClearMode && !isStart) || isFixed">
          <div class="bplayer_slider-cur" :style="{ width: offsetLeft }"></div>
        </div>
      </transition>
      <div v-show="isFixed">
        <div class="bplayer-close" @click="handleClose">×</div>
      </div>
    </template>
  </div>
</template>
<script>
import BaseControls from './BaseControls';
import StartBtn from './StartBtn';
const VERSION = require('../../../package.json').version;

export default {
  name: 'DxBPlayer',
  provide() {
    return {
      $player: this
    };
  },
  components: {
    BaseControls,
    StartBtn
  },
  props: {
    BPlayer: {
      type: Object,
      default: function() {
        return {};
      }
    },
    imageUrl: {
      type: String,
      default: ''
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
        muted: false,
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
      isClearMode: false,
      isFixed: false,
      isFullscreen: false,
      isHorizontal: false,
      offsetLeft: 0
    };
  },
  watch: {
    isPlaying(newData, oldData) {
      this.play();
      if (newData) {
        this.$emit('play');
      } else {
        this.$emit('pause');
      }
    }
  },
  computed: {
    // url数组判断
    vUrl() {
      let url = this.BPlayer.url || [];
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
      return Object.assign({}, this.baseVideo, this.BPlayer);
    }
  },
  methods: {
    // 判断视频类型
    getUrlType(url) {
      let u = url.split('?')[0] + '?v=1';
      return u.match(/[^\.]+(?=\?)/) || 'mp4';
    },
    // 全局初始化
    init() {
      this.$video = this.$refs.bplayer_video;
      this.$container = this.$refs.bplayer_container;
      this.$video.load();
      this.initPlayer();
      this.$emit('ready');
      setTimeout(() => {
        this.isPlaying = this.options.autoplay;
      }, 300);
    },
    // 初始化音量及静音
    initPlayer() {
      // this.$video.volume = this.options.volume;
      // setTimeout(() => {
      //   this.$video.muted = false;
      // }, 500);
    },
    // 隐藏或显示控件 *注：未开始播放或暂停播放不可以隐藏控件
    clearModeTogger() {
      if (this.isStart || !this.isPlaying) return;
      this.isClearMode = !this.isClearMode;
      // 显示控件，增加倒计时隐藏
      if (!this.isClearMode) {
        this.setClearModeTimer();
      }
    },
    // 控件隐藏倒计时
    setClearModeTimer() {
      // 清除已有倒计时 *注：未开始播放或暂停播放不可以隐藏控件
      if (this.clearModeTimer) {
        clearTimeout(this.clearModeTimer);
      }
      this.clearModeTimer = setTimeout(() => {
        if (this.isMove || !this.isPlaying) return;
        this.isClearMode = true;
        this.$emit('clearMode');
      }, 4000);
    },
    // 暂停除本视频的所有视频
    pauseAllVideo() {
      if (this.mutex) {
        const videos = document.querySelectorAll('video:not(.bplayer-video)');
        videos.forEach(v => {
          v.pause && v.pause();
        });
      }
    },
    // 播放或暂停
    play() {
      if (this.isPlaying) {
        this.pauseAllVideo();
        this.$video
          .play()
          .then(() => {
            this.setClearModeTimer();
          })
          .catch(e => {});
      } else {
        this.$video.pause();
      }
    },
    // 视频加载完成
    handleCanplay() {
      this.isWaiting = false;
      this.$emit('canplay');
    },
    // 视频加载中
    handleWait() {
      this.isWaiting = true;
      this.$emit('wait');
    },
    // 视频暂停
    handlePause() {
      this.isPlaying = false;
      this.isClearMode = false;
    },
    // 视频播放
    handlePlay() {
      this.isPlaying = true;
      this.isStart = false;
    },
    // 视频全屏或取消全屏
    handleFullscreen(newData) {
      this.setClearModeTimer();
      this.isFullscreen = newData;
      this.$emit('fullscreen', newData);
    },
    // 视频静音或取消静音
    handleMute() {
      this.setClearModeTimer();
      this.baseVideo.muted = !this.baseVideo.muted;
    },
    // 关闭小窗
    handleClose() {
      this.isFixed = false;
      this.isPlaying = false;
      this.isClearMode = false;
      this.$emit('close');
    },
    // 页面滚动
    handleScroll() {
      // 获取页面滚动位置
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.markTop = document.getElementById('bplayer-video').offsetHeight;
      // 显示隐藏判断
      if (this.scrollTop > this.markTop && this.isPlaying) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  },
  created() {
    this.$emit('created');
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll, true); // 进入页面加载滚轮滚动事件
      this.init();
    });
  },
  mounted() {
    this.$emit('mounted');
    console.log(
      '\n' + ' %c dx-bplayer v' + VERSION + ' %c https://github.com/boboyaohuo/dx-bplayer ' + '\n',
      'color: #ff461a; background: #f5f5f5; padding:6px 0;',
      'background: #f5f5f5; padding:6px 0;'
    );
  },
  beforeDestroy() {
    this.$emit('beforeDestroy');
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true); // 离开页面清除（移除）滚轮滚动事件
    this.$emit('destroyed');
  }
};
</script>
<style lang="stylus" scoped>
.dx-bplayer
  width 100%
  height 100%
  position relative
  z-index 1
  background #000
  overflow hidden
  &.fullscreen >>> div, span, i
    font-size 22px !important
  &:fullscreen,
  &:-webkit-full-screen,
  &:-moz-full-screen,
  &:-ms-fullscreen
    width 100%
    height 100%
    position fixed
    z-index 100000
    left 0
    top 0
    margin 0
    padding 0
    transform translate(0, 0)
  &.fixed
    position fixed
    z-index 99
    bottom 6.25em
    right 0.625em
    width 13.125em
    height 7.875em
  .bplayer_poster
    width 100%
    height 100%
    background-size cover
    background-position center
    background-repeat no-repeat
    position absolute
    z-index 2
  .bplayer-video
    display block
    background #000
    width 100%
    height 100%
    z-index 1
    outline none
    &::-webkit-media-controls,
    &::-webkit-media-controls-enclosure
      display none !important
  .bplayer-close
    position absolute
    z-index 2
    top 0.625em
    right 0.625em
    width 2em
    height 2em
    border-radius 50%
    background rgba(0, 0, 0, 0.3)
    text-align center
    line-height 1.8em
    color #fff
    font-size 0.625em
    &:before
      content ''
      position absolute
      top -0.3125em
      bottom -0.3125em
      right -0.3125em
      left -0.3125em
  .bplayer_slider
    position absolute
    bottom 0
    width 100%
    height 0.125em
    background rgba(15, 15, 15, 0.4)
    .bplayer_slider-cur
      width 0
      height 100%
      border-radius 0.3125em
      background-color #FF461A
      position absolute
      top 0
      left 0
.fade-center-enter-active,
.fade-center-leave-active
  transition opacity 0.3s
.fade-center-enter, .fade-center-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity 0

.fade-bottom-enter-active,
.fade-bottom-leave-active
  transition bottom 0.5s
.fade-bottom-enter, .fade-bottom-leave-to /* .fade-leave-active below version 2.1.8 */
  bottom -3.125em
</style>
