import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入主页
import Home from '../components/home.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
}
]

const router = new VueRouter({
  routes
})

export default router
