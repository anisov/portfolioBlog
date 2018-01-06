import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../vue/project/store/store'
import router from '../../vue/project/router/router'
let App =  require('../../vue/project/App');
new Vue({
  el: '#appProject',
  //store,
  router,
  render: h => h(App)
})

import MobileDetect from 'mobile-detect';
import swipe from 'jquery-touchswipe';
let Water = require('./../water/index-water');   
let Main = require('./../index/main'); 
let Maps = require('./../index/map'); 

