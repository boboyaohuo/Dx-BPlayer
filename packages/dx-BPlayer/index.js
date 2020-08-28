import DxPlayer from './src/DxPlayer.vue';

DxPlayer.install = function(Vue) {
  Vue.component(DxPlayer.name, DxPlayer);
};

export default DxPlayer;
