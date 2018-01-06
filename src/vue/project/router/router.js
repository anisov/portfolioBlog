import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/project.html/works/',
        component: require('../components/works/works.vue')
    },
    {
        path:'/project.html/',
        component: require('../components/about/about.vue')
    },
    {
        path:'/project.html/blog/',
        component: require('../components/blog/blog.vue')
    },
]
export default new VueRouter({
    routes,
    mode:'history'
})
