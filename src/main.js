import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入全局css样式
import './assets/css/global.css'
// 引入 按需引入的vant文件
import './plugins/vant.js'
// 引入iconfont图标
import './assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios
// 配置请求根路径
axios.defaults.baseURL = `http://www.liulongbin.top:3005/`
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
