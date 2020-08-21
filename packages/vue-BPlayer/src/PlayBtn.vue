<template>
  <div class="_play-btn"
       @click.stop="handleClick">
       <div v-if="isWaiting">加载</div>
       <div v-else-if="!isPlaying && !isWaiting">开始</div>
       <div v-else-if="isPlaying && !isWaiting">暂停</div>
  </div>
</template>

<script>
export default {
  props: {
    isPlaying: {
      default: false,
      type: Boolean
    },
    isStart: {
      default: true,
      type: Boolean
    },
    isWaiting: {
      default: true,
      type: Boolean
    }
  },
  methods: {
    handleClick() {
      this.$emit('update:isPlaying', !this.isPlaying);
      this.$emit('update:isStart', false);
    }
  }
};
</script>

<style lang="scss" scoped>
._play-btn {
  position: absolute;
  z-index: 19;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3.5em;
  height: 3.5em;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
