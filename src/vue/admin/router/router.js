import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/admin.html',
        component: require('../components/about/about.vue')
    },
    {
        path:'/admin.html/admin-works',
        component: require('../components/works/works.vue')
    },
    {
        path:'/admin.html/admin-blog',
        component: require('../components/blog/blog.vue')
    }
]
export default new VueRouter({
    routes,
    mode:'history'
})
