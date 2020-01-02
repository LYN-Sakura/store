import Vue from 'vue'
import VueRouter from 'vue-router'
import Wel from '../components/HelloWorld.vue'
import Search from '../components/search.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/wel' },
  { path: '/wel', component: Wel },
  { path: '/search', component: Search },
]

const router = new VueRouter({
  routes
})

export default router
