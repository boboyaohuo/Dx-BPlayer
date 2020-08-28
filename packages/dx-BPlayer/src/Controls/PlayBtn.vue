<template>
  <div class="bplayer_play" :class="isPlaying ? 'play' : 'pause'" @click.stop="handlePlay"></div>
</template>
<script>
export default {
  name: 'PlayBtn',
  inject: ['$player'],
  computed: {
    isPlaying() {
      return this.$player.isPlaying;
    }
  },
  methods: {
    handlePlay() {
      if (this.isPlaying) {
        this.$player.handlePause();
      } else {
        this.$player.handlePlay();
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.bplayer_play
  margin 0 0.3125em
  width 1.5625em
  height 1.5625em
  cursor pointer
  -webkit-tap-highlight-color transparent
  &.play
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAPNLhu5kJ3ahqOY+MW1UQRKmhfAAAAE5JREFUSMft1TkOgDAQBEGbY7E59/+vRZ5kUwQiclc4UseTAPyuTk25YrGiqT6IB5ccy+qyvIqzy0hMTExMTEz84WLPudksFts1HQnoxQ0BtRnKG7qfuAAAAABJRU5ErkJggg==') no-repeat center center/cover
  &.pause
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAeFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////GqOSsAAAAJ3RSTlMAWgn8+a+lQDf07+vi27+Vk4FrWFEjDwXOx4xzOzEqHxSce3V0YhbI/8P/AAAAy0lEQVRIx+3VyQ6CQBRE0baZmnkWUMBZ/v8PjRJT61dsTOy7PwnphHrKZvuXgotfzqTdLe/8lrE6Xj65hz3x0cu36NjJvxqlNYHRMBIYea0cI7c4yzGKblqOUVITGPUBgZE3yzFy8qcco/Cq5RglDwKj3sgxcioCQ09yjPItuNiCxw24VDROGsXi6K4VgbELBMYiMXgwxC+JFSZxjP0XYFweEvsnenozQ49+2tDnJq469sSGpfhC63ClDt5JULW+06SoGi/LjbLZfqEXnbB3o2LRKTMAAAAASUVORK5CYII=') no-repeat center center/cover
</style>
