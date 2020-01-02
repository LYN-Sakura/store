<template>
  <footer>
    <van-row type="flex">
      <van-col span="6">
        <router-link to="/">
          <i class="iconfont icon-index-fill icon"></i>
          <div>首页</div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/">
          <i class="iconfont icon-icon_zhanghao icon"></i>
          <div>会员</div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/">
          <van-icon name="cart-o" info="9" />
          <div>购物车</div>
        </router-link>
      </van-col>
      <van-col span="6">
        <router-link to="/">
          <van-icon name="search" />
          <div>搜索</div>
        </router-link>
      </van-col>
    </van-row>
  </footer>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
footer {
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
