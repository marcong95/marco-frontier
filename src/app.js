import 'normalize.css'
import './base.styl'

import Vue from 'vue'
import App from './App.vue'

var vm = new Vue({
  el: '#container',
  render: h => h(App)
})
