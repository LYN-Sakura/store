import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入主页
import Home from '../components/home.vue'
// 引入vip
import Vip from '../components/vip/Vip.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/vip',
  component: Vip
}
]

const router = new VueRouter({
  routes
})

export default router
