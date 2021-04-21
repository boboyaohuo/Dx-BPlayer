# Dx-BPlayer

This is a simple HTML5 video player based on Vue.

[![npm](https://img.shields.io/npm/v/dx-bplayer.svg?style=flat-square)](https://www.npmjs.com/package/dx-bplayer)
[![npm](https://img.shields.io/npm/l/dx-bplayer.svg?style=flat-square)](https://github.com/boboyaohuo/Dx-BPlayer/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/dx-bplayer.svg?style=flat-square)](https://www.npmjs.com/package/dx-bplayer)

## Introduction

![avatar](https://raw.githubusercontent.com/boboyaohuo/staticFile/master/image/25.png)

## Install

```bash
npm install dx-bplayer -S
or
yarn add dx-bplayer
```

## Use

```javascript
# main.js
import DxBPlayer from 'dx-bplayer'
import 'dx-bplayer/lib/dx-bplayer.css'
Vue.use(DxBPlayer)
```

```js
<template>
  <DxBPlayer ref="DxBPlayer" :playerOptions="options" @created="created" />
</template>
<script>
  export default {
    data () {
      return {
        options: {
          url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
          cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
          muted: false,
          loop: false,
          preload: 'auto'
        }
      }
    },
    computed(){
      $video(){
        return this.$refs.DxBPlayer.$video
      }
    },
    methods:{
      created(){}
    }
  }
</script>
```

## Props

| Name                | Type    | Default | Description        |
| ------------------- | ------- | ------- | ------------------ |
| playerOptions       | Object  | --      | all player options |
| playerOptions.url   | String  | --      | video resources    |
| playerOptions.cover | String  | --      | video cover        |
| playerOptions.preload | String  | --      | video preload        |
| playerOptions.muted | Boolean | false   | video mute         |
| playerOptions.volume | Number | 1   | video volume         |
| playerOptions.loop  | Boolean | false   | video loop         |
| playerOptions.autoplay  | Boolean | false   | video autoplay         |
| playerOptions.scrollFixed  | Boolean | false   | video scrolling fixed         |

## Event
| Name          | Description             |
| ------------- | ----------------------- |
| created       | component created       |
| mounted       | component mounted       |
| beforeDestroy | component beforeDestroy |
| destroyed     | component destroyed     |
| ready         | video init              |
| play          | video play              |
| pause         | video pause             |
| clearMode     | video clearMode         |
| canplay       | video canplay           |
| wait          | video waiting           |
| fullscreen    | video fullscreen        |
| fixed         | video fixed change      |

## License

This content is released under the MIT License.
