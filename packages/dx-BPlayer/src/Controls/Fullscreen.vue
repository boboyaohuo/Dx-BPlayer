<template>
  <div class="bplayer_fullscreen" :class="isFullscreen ? 'full' : 'noFull'" @click.stop="handleClickToggle"></div>
</template>

<script>
export default {
  name: 'Fullscreen',
  inject: ['$player'],
  data() {
    return {
      isFullscreen: false
    };
  },
  methods: {
    handleClickToggle() {
      if (this.isFullscreen) {
        this.resetFullScreen();
      } else {
        this.reqFullScreen(this.$player.$container);
      }
    },
    setFullscreenState() {
      const fullEle =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        document.webkitFullscreenElement;
      if (fullEle && fullEle !== this.$player.$container) {
        return;
      }
      this.isFullscreen = !!fullEle;
      this.$player.handleFullscreen(this.isFullscreen);
    },
    reqFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.webkitEnterFullscreen) {
        element.webkitEnterFullscreen();
      } else if (this.$player.$video.webkitEnterFullscreen) {
        // Safari for iOS
        this.$player.$video.webkitEnterFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        console.log('进入全屏失败');
      }
    },
    resetFullScreen() {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.msCancelFullScreen) {
        document.msCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    },
    docfullscreenchange() {
      this.setFullscreenState();
    },
    fullscreenchange() {
      this.setFullscreenState();
    },
    unbindChangeEvent() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.removeEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.$player.$container.removeEventListener('fullscreenchange', this.fullscreenchange);
        this.$player.$container.removeEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.removeEventListener('msfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('MSFullscreenChange', this.docfullscreenchange);
        document.removeEventListener('x5videoenterfullscreen', this.docfullscreenchange);
      }
    },
    bindChangeEvent() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.addEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.addEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.$player.$container.addEventListener('fullscreenchange', this.fullscreenchange);
        this.$player.$container.addEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.addEventListener('msfullscreenchange', this.docfullscreenchange);
        document.addEventListener('MSFullscreenChange', this.docfullscreenchange);
        document.addEventListener('x5videoenterfullscreen', this.docfullscreenchange);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bindChangeEvent();
    });
  },
  beforeDestroy() {
    if (this.$player.$container) {
      this.unbindChangeEvent();
    }
  }
};
</script>

<style lang="stylus" scoped>
.bplayer_fullscreen
  margin 0 0.3125em
  width 1.5625em
  height 1.5625em
  cursor pointer
  -webkit-tap-highlight-color transparent
  &.full
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMA/MQN0laZZkWlzovfW1Mb8uu048bDoYF+Z10yIxQI2uoIvwAAALxJREFUSMft1LkOwkAMRVFPJoGQyc6++v//kuJJVpTOjwIJ5nYujgsXllzub6va42BDPZ9deFJNtiiodh6sqruF1SuFYYsXhWGjENgsgc0S2CyBzTLYLIFbswRW1opZHlvjjcDW3oObFS48eEibZWmQ3yp222W1fHLZi8M+dVUjjuYVLsXTvUb9ZNhdLBSYtWEEpmxVAlNWgDkLzFlg0gKTFpixFE6wHD7BooPzXz2atrehC6EXuhgll/tmb7T7H+uv9JHwAAAAAElFTkSuQmCC') no-repeat center center/cover
  &.noFull
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAclBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9eWEHEAAAAJXRSTlMARDMtWh3xEdQhGBUNCQX67d2nYyjBnZKQiXt2b1I6MeS9sUg+MMDn0AAAANFJREFUSMftlskOgjAQQCvITssum4Lb/P8vaojQqSkVEg8S+64vb44zQzSarWDsRgJRhPdRdGymTWHC7rCwzty4VNr6gDhgc8TmJo1NQFTYZNjsP8VRYWFD02hRzCMZto6/FXvwxFfGMQCc5MoFcImSFMCeGe+3baCOadbkRKP5L7y6toiSsKkMuWEJQKKOrwCRfH7ON4lyGfzYDttybDoD7y50BlQxx/WEtFhwnxHlyuMeLHsrdkRKCRNxL4xNuLkwIsczXvRUFMwcjT4YmlU8AMCIMAYp8LJbAAAAAElFTkSuQmCC') no-repeat center center/cover
</style>
