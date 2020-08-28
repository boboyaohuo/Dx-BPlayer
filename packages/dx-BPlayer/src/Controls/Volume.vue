<template>
  <div class="bplayer_vol" :class="isMuted ? 'muted' : 'noMuted'" @click.stop="handleClick"></div>
</template>

<script>
export default {
  name: 'Volume',
  inject: ['$player'],
  computed: {
    isMuted() {
      return this.$player.options.muted
    }
  },
  methods: {
    handleClick() {
      this.$player.handleMute();
    }
  }
};
</script>

<style lang="stylus" scoped>
.bplayer_vol
  margin 0 0.3125em
  width 1.45em
  height 1.45em
  cursor pointer
  -webkit-tap-highlight-color transparent
  &.muted
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAwD/QEPCgMJCAYCBwULB/gRokzgAAAP5JREFUSMft1NuOgzAMBFBI4iTLbf3/X7vaFnfaSJXG7lvFPGHEESNiMV35iixbmK5ZNap3UdU5ZrsqsLsysL8ysL8ysLsycKAycLAyj5Mlqxf/KuLFm36A5QO8KoFbShBPQyJw/78uw0Di/TbkO6i3odP4UNNmVWg8q2mzqjRe1PTDVhLj1YgUHpc82EYfFTQsi6FhOQyNLU6TF1fczYXHsNA8hoXmMSy0f8MkDxvW+N2WVkzL2YnG0uy8gStR2+xDVzv+mfpguZ2PH69Hvf+c6fLuH7ZhrTAMaXnArpQawMgiUYzqwIHqwIHqwIHqwJHqwMHqfYpmPY51unLlD6rHQwT/VPOmAAAAAElFTkSuQmCC') no-repeat center center/contain
  &.noMuted
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAQMAw8BBg0LCQgOBwIKBQn4/4FWsEAAABQklEQVRIx+2V3XKEIAxG+QcFZZv3f9g2241sN1oJveqs5yrDeEz8BkRdXPwNa4wddQMAuEH3A5Ch1j7BHT3gLhGYXOfQF5UDJmsAuPVFxeUZ0O6Minc+tzEqLrd5QldUPG2LC86/GnqjOuDyop96ry9ugkP0txNte3D52Rd+lw1OG+4j4FyTSE5to074HpFsI1bZU2a6X0ZWLGesIhYCmRxHcxuhrFvyX8jkNq6WyjRuws2Li14oz/St98V/I6fHvrQDgXmHR3kw7YL18iiyQKbTZGijJpFs41ZmACgSWTugfhUrK5EnLKKn0LN6ZjmRy+ZqoKkb1WxkJmNrM/l2MrE8YGVyY6J/wiHlUA7AvphR3b5867qwbd6TLd02J/h4JBfVwcpkXHNBdVH2LjqvOqmOZCktNi/2WmyrGqYGdfH2fAIt9UWkVXIUpQAAAABJRU5ErkJggg==') no-repeat center center/contain
</style>
