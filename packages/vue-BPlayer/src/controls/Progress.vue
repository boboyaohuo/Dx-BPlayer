<template>
  <div class="_progress" @click.stop>
    <span class="_time-current">{{ textCurrentTime }}</span>
    <div class="_slider" :class="sliderInfo.isMove ? 'move' : ''" ref="_sliderRef" @click.stop="clickSlider">
      <div class="_slider-cur" :style="{ width: offsetLeft }"></div>
      <i
        class="_slider-btn"
        :class="sliderInfo.isMove ? 'move' : ''"
        @click.stop
        :style="{ left: offsetLeft }"
        ref="_sliderBtnRef"
      ></i>
    </div>
    <span class="_time-amount">{{ textTotalTime }}</span>
  </div>
</template>

<script>
const isMobile = /mobile/i.test(window.navigator.userAgent);
export default {
  props: {},
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
    playerRef() {
      return this.$parent.$parent;
    },
    $video() {
      return this.$parent.$parent.$video;
    },
    sliderRef() {
      return this.$refs._sliderRef;
    }
  },
  watch: {},
  methods: {
    secondToTime(time = 0) {
      time = time > 0 ? time : 0;
      const add0 = (num) => (num < 10 ? `0${num}` : num);
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
        this.$video.currentTime = second;
      }
    },
    clickSlider($event) {
      if (this.playerRef.isStart) return;
      const sliderW = this.sliderRef.offsetWidth;
      const curOffestLeft = $event.clientX - $event.target.getBoundingClientRect().left;
      this.offsetLeft = `${~~((curOffestLeft / sliderW) * 100)}%`;
      this.updateVideoState();
    },
    updateVideoState() {
      const newSecond = ~~(this.$video.duration * (parseFloat(this.offsetLeft) / 100));
      this.updateVideoTime(newSecond);
      this.updateTextTime(newSecond);
      this.playerRef.setClearModeTimer();
    },
    initVideoEvents() {
      const events = ['pause', 'canplay', 'play', 'waiting', 'timeupdate', 'durationchange', 'loadeddata'];
      events.forEach((e) => {
        this.$video.addEventListener(e, this[`handle${e.toLowerCase().replace(/^./, (f) => f.toUpperCase())}`], false);
      });
    },
    initSliderBtnEvents() {
      const dragEventMap = {
        DragStart: isMobile ? 'touchstart' : 'mousedown',
        DragMove: isMobile ? 'touchmove' : 'mousemove',
        DragEnd: isMobile ? 'touchend' : 'mouseup'
      };
      Object.keys(dragEventMap).forEach((key) => {
        const bindRef = key === 'DragStart' ? this.$refs._sliderBtnRef : this.playerRef.$container;
        bindRef.addEventListener(dragEventMap[key], this[`handle${key}`], false);
      });
    },
    handleLoadeddata() {
      const totalTime = this.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },
    handleCanplay() {
      this.$emit('canplay');
    },
    handleDurationchange() {
      // 视频读取完成拿到视频长度
      const totalTime = this.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },
    handleTimeupdate() {
      if (this.sliderInfo.isMove) return;
      // 视频播放时间变化执行
      const currentTime = this.$video.currentTime;
      const ratio = (currentTime / this.$video.duration) * 100;
      this.updateTextTime(currentTime);
      this.updateSlider(ratio);
    },
    handlePause() {
      // 视频暂停
      const totalTime = this.$video.duration;
      const currentTime = this.$video.currentTime;
      if (currentTime === totalTime) this.playerRef.isPlaying = false;
      this.$emit('paused');
    },
    handlePlay() {
      // 视频播放
      this.$emit('play');
    },
    handleWaiting() {
      // 视频因点击下一帧等待
      this.$emit('wait');
    },
    computeMoveInfo(moveX) {
      const sliderW = this.sliderRef.offsetWidth;
      let offset = moveX - this.sliderInfo.startX;
      if (Math.abs(offset) >= sliderW) {
        offset = offset > 0 ? sliderW : -sliderW;
      }
      const ratio = (offset / sliderW) * 100;
      const second = this.$video.duration * (ratio / 100);
      return { ratio, second };
    },
    handleDragStart($event) {
      $event.preventDefault();
      $event.stopPropagation();
      if (this.playerRef.isStart) return;
      // 滑块拖拽开始
      this.sliderInfo.startX = $event.clientX || $event.changedTouches[0].clientX;
      this.sliderInfo.isMove = true;
      this.playerRef.isMove = true;
      this.sliderInfo.oldTime = this.$video.currentTime;
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
        this.playerRef.isMove = false;
        this.playerRef.setClearModeTimer();
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
._progress {
  color: #fff;
  width: 100%;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1em;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  ._time-current,
  ._time-amount {
    font-size: 1em;
  }
  ._slider {
    width: 100%;
    height: 0.4em;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    position: relative;
    margin: 0 1em;
    &.move {
      height: 0.5em;
    }
    ._slider-cur {
      width: 0;
      height: 100%;
      border-radius: 4px;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 3ms;
    }
    ._slider-btn {
      width: 1em;
      height: 1em;
      display: inline-block;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      transition: transform 10ms;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      &:after {
        content: '';
        position: absolute;
        top: -0.4em;
        bottom: -0.4em;
        right: -0.4em;
        left: -0.4em;
      }
      &.move {
        transform: translate(-50%, -50%) scale(1.5);
      }
    }
  }
}
</style>
