import Vue from 'vue'
import App from '../../vue/admin/App'
import Vuex from 'vuex'
import store from '../../vue/admin/store/store'
import router from '../../vue/admin/router/router'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})