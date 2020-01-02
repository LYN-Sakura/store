import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入home 组件
import Home from '../components/home.vue'
Vue.use(VueRouter)

const routes = [{ path: '/home', component: Home }]

const router = new VueRouter({
  routes
})

export default router
