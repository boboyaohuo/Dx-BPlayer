<template>
  <div>
    <div class="start" @click.stop="handleClick" v-if="isStart">开始</div>
    <div class="_play-btn" @click.stop="handleClick">
      <div v-if="isWaiting && !isStart">加载</div>
      <div v-else-if="!isPlaying && !isWaiting && !isStart">继续</div>
      <div v-else-if="isPlaying && !isWaiting && !isStart">暂停</div>
    </div>
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

<style lang="stylus" scoped>
._play-btn {
  position: absolute;
  z-index: 19;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  svg {
    width: 100%;
    height: 100%;
  }
}
.start {
  position: absolute;
  z-index: 39;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  width: 5em;
  height: 5em;
  line-height: 5em;
  border-radius: 50%;
}
</style>
