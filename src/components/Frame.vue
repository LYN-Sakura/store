<template>
  <div>
    <!-- 头部区域 -->
    <header>
      <div id="back" @click="goback" v-show="backIsDispaly">&lt; 返回</div>
      <div>黑马程序员.vant</div>
    </header>
    <!-- 预留路由占位符 -->
    <div class="main"><router-view></router-view></div>
    <!-- 底部区域 -->
    <footer>
      <van-row type="flex">
        <van-col span="6">
          <i class="iconfont icon-index-fill icon"></i>
          <div>首页</div>
        </van-col>
        <van-col span="6">
          <i class="iconfont icon-icon_zhanghao icon"></i>
          <div>会员</div>
        </van-col>
        <van-col span="6">
          <van-icon name="cart-o" info="9" />
          <div>购物车</div>
        </van-col>
        <van-col span="6">
          <van-icon name="search" />
          <div>搜索</div>
        </van-col>
      </van-row>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否显示返回按钮
      backIsDispaly: false
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
header {
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #1989fa;
  line-height: 40px;
  font-size: 14px;
  color: white;
  #back {
    width: 80px;
    position: absolute;
  }
}
.main {
  width: 100%;
  height: 728px;
}
footer {
  width: 100%;
  height: 40px;
  padding-top: 10px;
  color: #7d7e80;
  background-color: white;
  div {
    font-size: 12px;
  }
}
.van-icon {
  font-size: 18px;
}
</style>
