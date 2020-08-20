<template>
  <div id="app">
    <section class="main">
      <TestVideo/>
    </section>
  </div>
</template>

<script>
import TestVideo from './components/TestVideo.vue';

export default {
  name: 'app',
  components: {
    TestVideo
  },
  data() {
    return {
    }
  }
};
</script>

<style lang="stylus">
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .header {
    padding-top: 20px;
    overflow: hidden;
    width: 100%;
    height: 150px;
    color: #fff;
    background-color: #159957;
    background-image: linear-gradient(120deg, #1b9fd4, #159957);
  }
  .github-corner {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
    z-index: 1;
  }
  .main {
    display: flex;
    flex-direction: column;
  }
}
</style>
