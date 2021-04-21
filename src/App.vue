<template>
  <div id="app">
    <div style="width: 100vw; height: 56vw;">
      <DxBPlayer :mutex="true" :playerOptions="videoOptions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      videoOptions: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
        cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
        muted: false,
        autoplay: true,
        scrollFixed: true
      }
    };
  }
};
</script>

<style lang="stylus">
html,
body
  padding 0
  margin 0
  width 100%
  height 100%
  background-color #f1f1f1
#app
  width 100%
  height 2000px
</style>
