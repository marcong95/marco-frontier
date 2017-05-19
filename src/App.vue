<template>
  <div class="app">
    <frontier-header></frontier-header>
    <article>
      <p>本网站仍在建设中。</p>
      <p>This website is still under construction.</p>
    </article>
    <frontier-footer></frontier-footer>
  </div>
</template>

<style lang="stylus">
  .app
    width 980px
    margin 0 auto

  article
    margin 10%
</style>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  components: {
    'frontier-header': Header,
    'frontier-footer': Footer
  }
}
</script>