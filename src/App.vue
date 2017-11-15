<template>
  <div class="app">
    <frontier-header></frontier-header>
    <article>
      <p lang="zh-cmn-Hans">本网站仍在建设中。</p>
      <p lang="zh-yue-Hans">呢个网站仲系度整紧。</p>
      <p lang="en">This website is still under construction.</p>
      <p lang="ja">このサイトはまだ建設中。</p>
    </article>
    <commit-timer></commit-timer>
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
import CommitTimer from './components/CommitTimer.vue'

export default {
  components: {
    'frontier-header': Header,
    'frontier-footer': Footer,
    CommitTimer
  }
}
</script>
