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
// 时间过滤器1
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
// 时间过滤器2
Vue.filter('dateYMD', function(originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  return `${y}-${m}-${d}`
})

// 注册全局组件
Vue.component('HeaderFrame', HeaderFrame)
Vue.component('FooterFrame', FooterFrame)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
