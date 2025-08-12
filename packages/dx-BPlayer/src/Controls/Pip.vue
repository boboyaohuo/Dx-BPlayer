<template>
  <div class="bplayer_pip" :class="isPip ? 'on' : 'off'" @click.stop="handleToggle" :title="isSupported ? '画中画' : '浏览器不支持'">
  </div>
</template>
<script>
export default {
  name: 'Pip',
  inject: ['$player'],
  data() {
    return { isPip: false, isSupported: false };
  },
  methods: {
    updateSupported() {
      const video = this.$player.$video;
      this.isSupported = !!(document.pictureInPictureEnabled && video && video.requestPictureInPicture);
    },
    async enterPip() {
      try {
        if (!this.isSupported) return;
        if (document.pictureInPictureElement) return;
        await this.$player.$video.requestPictureInPicture();
      } catch (e) {}
    },
    async exitPip() {
      try {
        if (document.pictureInPictureElement) {
          await document.exitPictureInPicture();
        }
      } catch (e) {}
    },
    handleToggle() {
      if (!this.isSupported) return;
      if (document.pictureInPictureElement) {
        this.exitPip();
      } else {
        this.enterPip();
      }
    },
    onEnter() {
      this.isPip = true;
      this.$player.setClearModeTimer && this.$player.setClearModeTimer();
      this.$player.$emit && this.$player.$emit('pip', true);
    },
    onLeave() {
      this.isPip = false;
      this.$player.$emit && this.$player.$emit('pip', false);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updateSupported();
      document.addEventListener('enterpictureinpicture', this.onEnter);
      document.addEventListener('leavepictureinpicture', this.onLeave);
    });
  },
  beforeDestroy() {
    document.removeEventListener('enterpictureinpicture', this.onEnter);
    document.removeEventListener('leavepictureinpicture', this.onLeave);
  }
};
</script>
<style lang="stylus" scoped>
.bplayer_pip
  margin 0 0.3125em
  width 1.5625em
  height 1.5625em
  cursor pointer
  -webkit-tap-highlight-color transparent
  &.on
    background url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ffffff"><rect x="3" y="5" width="18" height="14" rx="2" ry="2" opacity="0.5"/><rect x="13" y="11" width="7" height="5"/></svg>') no-repeat center center/cover
  &.off
    background url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23ffffff"><rect x="3" y="5" width="18" height="14" rx="2" ry="2" opacity="0.5"/><rect x="13" y="11" width="7" height="5" opacity="0.8"/></svg>') no-repeat center center/cover
</style>