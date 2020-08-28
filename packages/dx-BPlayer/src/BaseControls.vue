<template>
  <div class="bplayer-base-controls">
    <PlayBtn />
    <Volume />
    <Progress />
    <Fullscreen />
  </div>
</template>
<script>
import PlayBtn from './Controls/PlayBtn';
import Volume from './Controls/Volume';
import Progress from './Controls/Progress';
import Fullscreen from './Controls/Fullscreen';
export default {
  name: 'BaseControls',
  components: {
    PlayBtn,
    Volume,
    Progress,
    Fullscreen
  }
};
</script>
<style lang="stylus" scoped>
.bplayer-base-controls
  position absolute
  bottom 0
  left 0
  right 0
  z-index 19
  width 100%
  height 3.12em
  display flex
  align-items center
  justify-content: space-between
  padding 0 0.625em
  box-sizing border-box
  user-select none
  background linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0))
</style>
