<template>
  <div>
    <div class="bplayer_start" @click.stop="handleStart" v-if="isStart"></div>
    <div class="bplayer_waiting" v-if="isWaiting && !isStart"></div>
  </div>
</template>

<script>
export default {
  inject: ['$player'],
  props: {
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
    // 开始播放操作
    handleStart() {
      this.$player.handlePlay();
    }
  }
};
</script>

<style lang="stylus" scoped>
.bplayer_start,
.bplayer_waiting
  position absolute
  z-index 39
  top 50%
  left 50%
  transform translate(-50%, -50%)
  background rgba(0, 0, 0, 0.6)
  color #fff
  width 2.5em
  height 2.5em
  border-radius 50%
  cursor pointer
  -webkit-tap-highlight-color transparent
.bplayer_start
  width 4.375em
  height 4.375em
  background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAABJlBMVEUAAAAAAAD////v7+/n5+f////+/v76+vpOTk4pKSn///////////98fHwXFxf////////////9/f3z8/P///9wcHD///////+rq6v////////////+/v7+/v7s7Ozp6en////Hx8eZmZmJiYn///9aWlr////////////j4+P////29vb////R0dFra2vr6+vV1dWjo6NZWVlERET////t7e3h4eH////////CwsKzs7NoaGj19fXw8PDY2NiioqL////////////r6+vg4ODd3d3X19fm5uazs7P///+/v7+5ubng4OD////b29vLy8u9vb25ubn////////////j4+Pb29utra2UlJTq6urJycnDw8P////////l5eXU1NTg4ODd3d1KFj1xAAAAYnRSTlMjAHPTtAhubS4nPWVNNCVGQyJsZ0AyXEpBKSUPcnBiYFZMOzg3LhgTBlsMal5ROMdTPjMqG8ujaFFKRDBpZVVQMzEsw56ZjV1dIWhjWllWTkhGLx8DqJRYScF0bGI7q4VZWCe93eoAAAXrSURBVGje7ZvpVtNQEIAvg0n3UrrQlbZ0oxSq1Fal7MUFUURQ3Pf3fwk5Smea3DR36fW4HL/fnPMxzWTmZjJhc7+J/+Jp/BFia/AiHV36mLRhORnZeBYNv2i15zgMi4v5xAZ4sJQudOYQw+JOfiECPmwkCpZ58WpjAySojoomxe1CFaSJvjQltg7vgRIb+bYBsTVKgjKRwszixQho8aw1k7iYBW3Slr44b4MHgUr3ohZrhkIsHmpmYr3zzbLn390raIqtBHAk1y4yzIPY8HgZOMJaYv7qBrp1Np147SwALrY66uIwuFirxZmAUK7s/oUKquIFcFDa32FSxNbcOaYkvoyCg/0mkyZ2DA4WFMRtZ4UsZ5gS9RRMkpUS897ANlMlvuJI8aik+NLhPQ4yDXb2uJjF4igQpXOmR3zT/zoz/3wO1Jk2uWUg0mJxGohUk81ALABEWCQuAFEOsZlo7gJx4i/uJAGpoFeXYAqQSNtXvDURb5wxk+aEnzgMSKrPDNBcByQ/XXwCyHqQGSFjU8MoThO3qRHaGWaIGlfBeHEDkB4zxgogBW9xEZBNZpAKHYYsT3GWEitkUhykQtLwErcAiTGj5GDMcgfFXr2hywxTocrJi1epM4h+6NsHB0G1JlniQmYeTUnQ+Ot35694eFPF3IUxh25xhzLLv1Qe3Jn/wZ0nCuK+jSXbLR6hOOefovfnx9xVCPo5jHnpEi9hrWS+vEcvBq0WchbFrtS6YL7cRa1a0JuYXhaKHdXSFqT0jXkHt57KNguMbNEhruLRnUmJiQe35cxl7MuTYgvG1CXEWkFvY15PiguUWhJiraD7WESKE+I0tiUVMQX9WKVu5ifEz+CampKYeCgO+hwvMokv8cEhpCYm7j+WzusNFFNHLDNlMQUtahzYltsoPoRrnuuLxUEf49kexVms0zpi4nVQ6vDVQDHORzNaYuLdGzadHp42UQxj4vpicdA7mF1jcYfKh75YHHQI+8FYPMDHNA0xz5e4KK2tn2IqmKc6Yp5HzBt8glu9Fh9hwdQS87wVFM3BTzHdxl0ZsX7IaxMtmTlOASuGxK9+l/izWbH5n3pk+hq/FYhP3Fm9b+h2Eh27WtfiRRxJGxE/isvex9SODYjvT+8T9kRDZo4zZoCZaBLCWp3E7oT/SkhfLD4LxPDVK4rxwSmmLxYf+XI4y0XxgpETyK3Hkk+Mhyh+Id8lbqiHy/cIFOOz4p62WPwgE8f59SWK6ezT1xLTU4xkbvFPEj0lMYWrMuFLk5imtmdaD21Sj+d7OFgkMRVNO67+mCo3kGjCGGtCbOGFr0mItaYRQzrconhyMn8qIdaZv1CHCKPYcSeX+r9m+FJ3zZsYN19bURg3fWDSnOLo2DXnqkpOMoO36EiH4aqkVsIlzsOYcyYYKWK4CuzDmJZLbNmyw9u3r/DelaZZorJFYqwhsmfNmwcHt5kSX+kdECcu0hg9yAxDKZ20SMwPrNcMe+P0Mnk0x4uLhl/+EEPHaxgS81c50DfpjZVgzNGcl9hK0vt5g95QCiilOTHey5jZxvgGyIATU6ugLmWIC/59PS8u2sbfatZKXGah2PvHXm8aSSwbHKN5XsyvROwGDXgD/HqCt7gd4cyGvFHBVsQJEOs7M1ZKG5CI5S0mwtz+iS65EvAXmMS+GyilbX3vc98lOibaITsL6WmDFec2mUiM42tkN6bj7WFa4XFHIEYz0VUOun8KnJcXizf21nNq7XdoC7b2UMyTAAd7NYVk3pVZzmSy25Hlnly02ylwsFxQ3ctcdO82rw+FlWynGwAn1aL6JqqVBTeV7aCPdbgHbhJ6S79h4El1ex7yZm5zFzjsvGD3VnW5OlDZH+Zq9cwV9dr2ylnZBi+2ivr71VYDdLGPZtsoX43qeROdmZf3B1V1bXTVyOcKL7fUtNmWsQ80VtNJWWvkU9HolyHWYjYpYU0MzH2SQrQaW/Z0aTJ6iFfWnJjko2yEl35cOOKkxsSENTj6tBCtLl1RjSYaea/Pnf6pL7z+bvF3r4igWbCUzskAAAAASUVORK5CYII=') no-repeat center center/100%
.bplayer_waiting
  background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAC00lEQVRoQ+2ajU0cMRCF51VAOkBUQOgAKkjoIFSQpIJABUAFCRVAB4EKoARKoIOJnuSLRsa3nv3R+oe1tBLSHWd/88Yz4/FCPtjAB+OVDbh3xTeFN4U7s0Axl1bVX8GWLyLyBuBpDduWBNYEIOEfReQOAP9efNQGbAEJfAPgbknqmoF3nK8icgGAys8eJYFPReSziHwKz1cRORwgegjgb3OoiwGnFq2qNAAN8WMPPNU+n7O/qwK2RlDVbyJymQCnwoSe5OLVAhNeVenuVHuXwqxNzqZAVw28owtq34jIgSGm0oQelb6aAA5qc3/TjS009/QJAHcgawZ4APoBwLk3cjcFHKAZzH5HgO793BxwgGb0toHsFcCRR+VWgRm9GaxsocJq7E8OukngPa79AuCkW+AAzShtVWbEHkxTzSocgFmUXBtVrwBwf+8drQMzNz8buqxbNw2ccmsAg0w9ALPk/G5UHszJPQDHOZknKZ6dk6MH4FGBqwdgNgz+eiP1ILCqxu7irllzBUCpz8cC/wTAINHsyAGzsXbvdZcWrJADjvfHLQAGiWZHNmipqr0hcB/DarWIB5jF+LEByBbotcJyXR7guJJpOnB5gOMCvWm3zgKHAj12a1d3oUbX9gLHjbPR7dFa4F3AqWOYiGQP27VA2nWMAY5zMn+nOdd2AweVeez6Yiw26bqjpPJjgVPt0aagRwEHlVN3PIRmfs72hUuq6yo8UgtU1dR+5ld5nGS97b7cWtsAoxXeLTBAc0/b2zx+zJR1ufTLKEsZZjKwcW9Cp97NIDjL0qdcc3wpGM/vzAIO0Axk3Ls2esdzE56GoavzYf94lRfR4oXMBo5cnOBDb+L8nz/XP/aoNeU7iwEbcJahbBLYI+W7tXUDbMCZvtgi4vMOvjvgWNIQ1bnfaQjJXXpNcVfP/yzu0p5JS35nAy5p/TXm3hRew8ol59gULmn9Neb+B3v/9z3iONHxAAAAAElFTkSuQmCC') no-repeat center center/80%
  animation turn 1s infinite linear
@keyframes turn
  0%
    transform translate(-50%, -50%) rotateZ(0deg) rotateY(180deg)
  100%
    transform translate(-50%, -50%) rotateZ(360deg) rotateY(180deg)
</style>
