<template>
  <div class="bplayer_speed" @click.stop="handleToggle" :title="`倍速: ${currentRate}x`">
    {{ displayText }}
  </div>
</template>
<script>
export default {
  name: 'Speed',
  inject: ['$player'],
  data() {
    return {
      currentRate: 1
    };
  },
  computed: {
    rates() {
      const list = this.$player.options.playbackRates || [0.5, 1, 1.25, 1.5, 2];
      // 去重+排序
      const uniq = Array.from(new Set(list)).filter(Boolean);
      return uniq.sort((a, b) => a - b);
    },
    displayText() {
      return `${this.currentRate}x`;
    }
  },
  methods: {
    syncFromVideo() {
      const rate = Number(this.$player.$video && this.$player.$video.playbackRate) || 1;
      this.currentRate = rate;
    },
    applyRate(rate) {
      if (!this.$player.$video) return;
      this.$player.$video.playbackRate = rate;
      this.currentRate = rate;
      this.$player.setClearModeTimer && this.$player.setClearModeTimer();
      this.$player.$emit && this.$player.$emit('ratechange', rate);
    },
    handleToggle() {
      if (!this.rates.length) return;
      const idx = this.rates.findIndex(r => r === this.currentRate);
      const next = this.rates[(idx + 1) % this.rates.length];
      this.applyRate(next);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const init = Number(this.$player.options.playbackRate) || 1;
      this.applyRate(init);
    });
  }
};
</script>
<style lang="stylus" scoped>
.bplayer_speed
  margin 0 0.3125em
  padding 0 0.375em
  min-width 2.25em
  height 1.5625em
  line-height 1.5625em
  text-align center
  font-size 0.75em
  color #fff
  background rgba(0,0,0,0.35)
  border-radius 0.25em
  cursor pointer
  -webkit-tap-highlight-color transparent
  user-select none
</style>