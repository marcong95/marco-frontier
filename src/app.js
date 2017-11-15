import 'normalize.css'
import './styles/base.styl'

import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
// import store from './store'

Vue.http = Vue.prototype.$http = axios

var vm = new Vue({
  el: '#container',
  render: h => h(App),
  // store
})
