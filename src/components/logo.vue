<template>
  <div class="mf-logo">
    <span class="mf-logo-text">Mj</span>
  </div>
</template>

<style lang="stylus">
  fgcolor = #1d3d56
  bgcolor = #000
  .mf-logo
    display inline-block
    box-sizing border-box
    position relative
    height 2em
    width 2em
    font-size 200px
    border 0.15em solid fgcolor
    background transparent

  .mf-logo-text
    position absolute
    right 0.1em
    bottom 0
    padding-top 0.1em
    color fgcolor
    font-family Helvetica, Arial, sans-serif
    vertical-align text-bottom
    border-top 0.15em solid fgcolor
    
  .mf-logo-text:before
    content ''
    display inline-block
    vertical-align middle
    height 1em
    width 0
    border-left 1px dashed red

  .mf-logo-text:after
    content ''
    display inline-block
    height 10px
    width 10px
    border 1px dashed red
</style>