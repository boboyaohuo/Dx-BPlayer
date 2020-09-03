# Dx-BPlayer

This is a simple HTML5 video player based on Vue.

[![npm](https://img.shields.io/npm/v/dx-blayer.svg?style=flat-square)](https://www.npmjs.com/package/dx-bplayer)
[![npm](https://img.shields.io/npm/l/dx-bplayer.svg?style=flat-square)](https://github.com/boboyaohuo/Dx-BPlayer/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/dx-bplayer.svg?style=flat-square)](https://www.npmjs.com/package/dx-bplayer)

## Introduction

![avatar](https://raw.githubusercontent.com/boboyaohuo/staticFile/master/image/25.png)

## Install

```bash
npm install dx-bplayer -S
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
  <DxBPlayer ref="DxBPlayer" :options="options" @created="created" />
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

| Name          | Type    | Default | Description        |
| ------------- | ------- | ------- | ------------------ |
| options       | Object  | --      | all player options |
| options.url   | String  | --      | video resources    |
| options.cover | String  | --      | video cover        |
| options.muted | Boolean | false   | video mute         |
| options.loop  | Boolean | false   | video loop         |

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

## License

This content is released under the MIT License.
