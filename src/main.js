import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 按需引入的vant文件
import './plugins/vant.js'
// 引入iconfont图标
import './assets/font/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
