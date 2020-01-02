import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入home 组件
import Home from '../components/home.vue'
// 引入图片展示组件
import ShareImg from '../components/share_img.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/shareimg', component: ShareImg }
]

const router = new VueRouter({
  routes
})

export default router
