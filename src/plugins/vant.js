import Vue from 'vue'
import { Button, Grid, GridItem, Swipe, SwipeItem, Lazyload, Icon, Image } from 'vant'
// 按需引入并导入九宫格模块
Vue.use(Grid).use(GridItem)
// 按需导入轮播图模块
Vue.use(Swipe).use(SwipeItem)
// 图片懒加载 options 为可选参数，无则不传
Vue.use(Lazyload)
Vue.use(Image)
Vue.use(Button)
Vue.use(Icon)
