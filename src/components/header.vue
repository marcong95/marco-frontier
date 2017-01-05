<template>
  <nav>
    <div class="site-name">
      <mf-logo></mf-logo>
      <span>Marco's Frontier of Self-Struggling</span>
    </div>
    <ul class="main-nav">
      <li>Home</li>
      <li>Blog</li>
      <li>Project</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<script>
  import Logo from './logo.vue'

  export default {
    components: {
      'mf-logo': Logo
    }
  }
</script>

<style lang="stylus">
  .main-nav
    margin 0
    padding 0

    li
      list-style none
</style>