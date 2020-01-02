import Vue from 'vue'
import VueRouter from 'vue-router'
import Shopcar from '../components/shopcar/Shopcar.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ path: '/shopcar', component: Shopcar }]
})

export default router
