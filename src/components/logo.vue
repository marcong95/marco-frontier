<template>
  <div class="mf-logo">
  </div>
</template>

<style lang="stylus">
  fgcolor = #1d3d56
  bgcolor = transparent
  
  // .mf-logo
  //   display inline-block
  //   box-sizing border-box
  //   position relative
  //   height 2em
  //   width 2em
  //   font-size 200px
  //   border dashed 1px red
  //   background bgcolor
  
</style>

<script>
import DiceFace from './dice-face.vue'

export default {
  components: {
    'dice-face': DiceFace
  }
}
</script>