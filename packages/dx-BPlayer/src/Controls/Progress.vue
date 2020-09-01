<template>
  <div class="bplayer_progress" @click.stop>
    <span class="bplayer_time-current">{{ textCurrentTime }}</span>
    <div
      class="bplayer_slider"
      :class="sliderInfo.isMove ? 'move' : ''"
      ref="bplayer_sliderRef"
      @click.stop="clickSlider"
    >
      <div class="bplayer_slider-cur" :style="{ width: offsetLeft }"></div>
      <i
        class="bplayer_slider-btn"
        :class="sliderInfo.isMove ? 'move' : ''"
        @click.stop
        :style="{ left: offsetLeft }"
        ref="bplayer_sliderBtnRef"
      ></i>
    </div>
    <span class="bplayer_time-amount">{{ textTotalTime }}</span>
  </div>
</template>

<script>
const isMobile = /mobile/i.test(window.navigator.userAgent);
export default {
  name: 'Progress',
  inject: ['$player'],
  data() {
    return {
      textTotalTime: '00:00',
      textCurrentTime: '00:00',
      offsetLeft: 0,
      sliderInfo: {
        isMove: false,
        startX: 0,
        oldTime: 0,
        oldOffsetLeft: 0
      }
    };
  },
  computed: {
    sliderRef() {
      return this.$refs.bplayer_sliderRef;
    }
  },
  watch: {
    offsetLeft(newData, oldData) {
      this.$player.offsetLeft = newData;
    }
  },
  methods: {
    secondToTime(time = 0) {
      time = time > 0 ? time : 0;
      const add0 = num => (num < 10 ? `0${num}` : num);
      const h = ~~(time / 3600);
      const m = ~~((time % 3600) / 60);
      const s = ~~(time % 60);
      return (h > 0 ? [h, m, s] : [m, s]).map(add0).join(':');
    },
    updateSlider(ratio) {
      if (ratio >= 0 && ratio <= 100) {
        this.offsetLeft = `${ratio}%`;
      }
    },
    updateTextTime(second) {
      this.textCurrentTime = this.secondToTime(second);
    },
    updateVideoTime(second) {
      if (second) {
        this.$player.$video.currentTime = second;
      }
    },
    clickSlider($event) {
      if (this.$player.isStart) return;
      const sliderW = this.sliderRef.offsetWidth;
      const curOffestLeft = $event.clientX - $event.target.getBoundingClientRect().left;
      this.offsetLeft = `${~~((curOffestLeft / sliderW) * 100)}%`;
      this.updateVideoState();
    },
    updateVideoState() {
      const newSecond = ~~(this.$player.$video.duration * (parseFloat(this.offsetLeft) / 100));
      this.updateVideoTime(newSecond);
      this.updateTextTime(newSecond);
      this.$player.setClearModeTimer();
    },
    initVideoEvents() {
      const events = ['pause', 'canplay', 'play', 'waiting', 'timeupdate', 'durationchange', 'loadeddata'];
      events.forEach(e => {
        this.$player.$video.addEventListener(
          e,
          this[`handle${e.toLowerCase().replace(/^./, f => f.toUpperCase())}`],
          false
        );
      });
    },
    initSliderBtnEvents() {
      const dragEventMap = {
        DragStart: isMobile ? 'touchstart' : 'mousedown',
        DragMove: isMobile ? 'touchmove' : 'mousemove',
        DragEnd: isMobile ? 'touchend' : 'mouseup'
      };
      Object.keys(dragEventMap).forEach(key => {
        // const bindRef = key === 'DragStart' ? this.$refs.bplayer_sliderBtnRef : this.$player.$container;
        const bindRef = this.$refs.bplayer_sliderBtnRef;
        bindRef.addEventListener(dragEventMap[key], this[`handle${key}`], false);
      });
    },
    handleLoadeddata() {
      const totalTime = this.$player.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },
    handleCanplay() {
      this.$player.handleCanplay();
    },
    handleDurationchange() {
      // 视频读取完成拿到视频长度
      const totalTime = this.$player.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },
    handleTimeupdate() {
      if (this.sliderInfo.isMove) return;
      // 视频播放时间变化执行
      const currentTime = this.$player.$video.currentTime;
      const ratio = (currentTime / this.$player.$video.duration) * 100;
      this.updateTextTime(currentTime);
      this.updateSlider(ratio);
    },
    handlePause() {
      // 视频暂停
      const totalTime = this.$player.$video.duration;
      const currentTime = this.$player.$video.currentTime;
      if (currentTime === totalTime) this.$player.isPlaying = false;
      this.$player.handlePause();
    },
    handlePlay() {
      // 视频播放
      this.$player.handlePlay();
    },
    handleWaiting() {
      // 视频因点击下一帧等待
      this.$player.handleWait();
    },
    computeMoveInfo(moveX) {
      const sliderW = this.sliderRef.offsetWidth;
      let offset = moveX - this.sliderInfo.startX;
      if (Math.abs(offset) >= sliderW) {
        offset = offset > 0 ? sliderW : -sliderW;
      }
      const ratio = (offset / sliderW) * 100;
      const second = this.$player.$video.duration * (ratio / 100);
      return { ratio, second };
    },
    handleDragStart($event) {
      $event.preventDefault();
      $event.stopPropagation();
      if (this.$player.isStart) return;
      // 滑块拖拽开始
      this.sliderInfo.startX = $event.clientX || $event.changedTouches[0].clientX;
      this.sliderInfo.isMove = true;
      this.$player.isMove = true;
      this.sliderInfo.oldTime = this.$player.$video.currentTime;
      this.sliderInfo.oldOffsetLeft = parseFloat(this.offsetLeft);
    },
    handleDragMove($event) {
      $event.preventDefault();
      $event.stopPropagation();
      const ClienX = $event.clientX || $event.changedTouches[0].clientX;
      // 滑块拖拽移动中
      if (this.sliderInfo.isMove) {
        const { ratio, second } = this.computeMoveInfo(ClienX);
        this.updateSlider(ratio + this.sliderInfo.oldOffsetLeft);
        this.updateTextTime(second + this.sliderInfo.oldTime);
      }
    },
    handleDragEnd($event) {
      const ClienX = $event.clientX || $event.changedTouches[0].clientX;
      // 滑块拖拽结束
      if (this.sliderInfo.isMove) {
        const { ratio, second } = this.computeMoveInfo(ClienX);
        this.updateVideoTime(second + this.sliderInfo.oldTime);
        this.sliderInfo.isMove = false;
        this.$player.isMove = false;
        this.$player.setClearModeTimer();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initVideoEvents();
      this.initSliderBtnEvents();
    });
  }
};
</script>

<style lang="stylus" scoped>
.bplayer_progress
  color #fff
  flex 1
  height 0.1875em
  display flex
  align-items center
  justify-content space-between
  margin 0 0.3125em
  cursor pointer
  -webkit-tap-highlight-color transparent
  .bplayer_time-current,
  .bplayer_time-amount
    font-size 0.6785em
    color #fff
  .bplayer_slider
    width 100%
    height 0.1875em
    background rgba(15, 15, 15, 0.4)
    border-radius 0.3125em
    position relative
    margin 0 0.78125em
    touch-action none
    &.move
      height 0.25em
    .bplayer_slider-cur
      width 0
      height 100%
      border-radius 0.3125em
      background-color #FF461A
      position absolute
      top 0
      left 0
    .bplayer_slider-btn
      box-sizing content-box
      width 0.625em
      height 0.625em
      display inline-block
      background-color #FF461A
      background-clip content-box
      border-radius 50%
      position absolute
      top 50%
      left 0
      transform translate(-50%, -50%)
      cursor pointer
      -webkit-tap-highlight-color: transparent
      border 0.25em solid rgba(249, 101, 66, 0.4)
      &.move
        transform translate(-50%, -50%) scale(1.2)
</style>
