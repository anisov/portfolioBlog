import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import skills from './modules/skills'
import posts from './modules/blog'
import works from './modules/works'

const store = new Vuex.Store({
    modules:{
        skills,
        posts,
        works,
    }
})

export default store 