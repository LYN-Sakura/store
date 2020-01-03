import Vue from 'vue'

import {
  Row,
  Col,
  Button,
  Grid,
  GridItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Icon,
  Image,
  Tab,
  Tabs,
  Field,
  CellGroup,
  Notify,
  ImagePreview,
  Loading,
  PullRefresh,
  NoticeBar,
  List,
  Cell,
  Stepper,
  Toast,
  Rate,
  Search,
  Card,
  Dialog,
  SwipeCell,
  Divider
} from 'vant'
Vue.use(Row)
  .use(Col)
  .use(Button)
  .use(Grid)
  .use(GridItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Icon)
  .use(Image)
  .use(Tab)
  .use(Tabs)
  .use(Field)
  .use(CellGroup)
  .use(Notify)
  .use(ImagePreview)
  .use(Loading)
  .use(PullRefresh)
  .use(NoticeBar)
  .use(PullRefresh)
  .use(List)
  .use(Cell)
  .use(Stepper)
  .use(Toast)
  .use(Rate)
  .use(Search)
  .use(Card)
  .use(SwipeCell)
  .use(Divider)
Vue.prototype.$alert = Dialog.alert
Vue.prototype.$confirm = Dialog.confirm
