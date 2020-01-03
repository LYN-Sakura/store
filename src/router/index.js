import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入主页
import Home from '../components/home.vue'
// 引入图片展示组件
import ShareImg from '../components/showimg/share_img.vue'
// 引入vip
import Vip from '../components/vip/Vip.vue'
// 引入图片展示详情页
import Img from '../components/imgxiangqing.vue'
// 引入商品评论
import Goodscomments from '../components/goodside/Goodscomments.vue'
// 引入商品图文信息
import Goodsdesc from '../components/goodside/Goodsdesc.vue'
Vue.use(VueRouter)

const routes = [
  {
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
  },
  {
    path: '/shareimg',
    component: ShareImg
  },
  {
    path: '/imgxiangqing',
    component: Img
  },
  {
    path: '/goodscomments',
    component: Goodscomments
  },
  {
    path: '/goodsdesc',
    component: Goodsdesc
  }
]

const router = new VueRouter({
  routes
})

export default router
