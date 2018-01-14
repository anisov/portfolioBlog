import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/admin',
        component: require('../components/about/about.vue')
    },
    {
        path:'/admin/admin-works',
        component: require('../components/works/works.vue')
    },
    {
        path:'/admin/admin-blog',
        component: require('../components/blog/blog.vue')
    }
]
export default new VueRouter({
    routes,
    mode:'history'
})
