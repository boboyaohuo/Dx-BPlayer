<template>
  <div class="qun-video">
    <VueBPlayer ref="vueBPlayer" :mutex="true" :video="video" @fullscreen="fullscreen" />
  </div>
</template>
<script>
export default {
  name: 'TestVideo',
  data() {
    return {
      video: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
        loop: true,
        autoplay: false,
        cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
      },
      full: false
    };
  },
  watch: {},
  computed: {
    $video() {
      return this.$refs.vueBPlayer.$video;
    }
  },
  filters: {},
  methods: {
    fullscreen(data) {
      console.log(data);
    }
  },
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang="stylus" scoped>
.qun-video {
  width: 100%;
  margin: 0 auto;
}
</style>
