import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入主体框架路由
import Frame from '../components/Frame.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/frame'
},
{
  path: '/frame',
  component: Frame
}
]

const router = new VueRouter({
  routes
})

export default router
