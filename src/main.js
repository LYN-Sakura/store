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
// 引入头部组件
import HeaderFrame from './components/frame/Headerframe.vue'
// 引入脚部组件
import FooterFrame from './components/frame/Footerframe.vue'
Vue.config.productionTip = false
Vue.prototype.$http = axios
// 配置请求根路径
axios.defaults.baseURL = `http://www.liulongbin.top:3005/`

// 注册全局组件
Vue.component('HeaderFrame', HeaderFrame)
Vue.component('FooterFrame', FooterFrame)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
