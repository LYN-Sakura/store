import Vue from 'vue'
import { Button, Search, Row, Col, Card, Icon, Dialog, SwipeCell, Cell } from 'vant'

Vue.use(Button)
  .use(Search)
  .use(Row)
  .use(Col)
  .use(Card)
  .use(Icon)
  .use(SwipeCell)
  .use(Cell)
Vue.prototype.$alert = Dialog.alert
Vue.prototype.$confirm = Dialog.confirm
