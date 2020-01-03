<template>
  <footer>
    <van-row type="flex">
      <van-col span="6">
        <router-link to="/home" :style="'color:' + homeLight">
          <i class="iconfont icon-index-fill"></i>
          <div>首页</div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/vip" :style="'color:' + vipLight">
          <i class="iconfont icon-icon_zhanghao"></i>
          <div>会员</div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/">
          <van-icon name="cart-o" :info="this.$store.state.count" />
          <div>购物车</div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/search" :style="'color:' + searchLight">
          <van-icon name="search" />
          <div>搜索</div>
        </router-link>
      </van-col>
    </van-row>
  </footer>
</template>

<script>
export default {
  props: ['homeLight', 'vipLight', 'searchLight'],
  data() {
    return {}
  },
  methods: {},
  created() {
    this.$store.commit('get')
  }
}
</script>

<style lang="less" scoped>
footer {
  position: fixed;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding-top: 10px;
  background-color: white;
  a {
    color: #7d7e80;
  }
  div {
    font-size: 12px;
  }
}
.van-icon {
  font-size: 18px;
}
</style>
