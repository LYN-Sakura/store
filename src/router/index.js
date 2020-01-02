import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入主体框架路由
import Frame from '../components/Frame.vue'
// 引入主页
import Home from '../components/home.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/frame'
},
{
  path: '/frame',
  component: Frame,
  redirect: '/home',
  children: [{
    path: '/home',
    component: Home
  }]
}
]

const router = new VueRouter({
  routes
})

export default router
