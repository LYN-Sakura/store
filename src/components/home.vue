<template>
  <div>
    <!-- 顶部轮播图区域 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(images, index) in lunbo" :key="index"><img v-lazy="images.img"/></van-swipe-item>
    </van-swipe>
    <!-- 中部九宫格区域 -->
    <div class="box">
      <div>
        <router-link to='/'>
          <img src="..\assets\images\jiu\menu1.png" alt="" />
          <span>新闻资讯</span>
        </router-link>
      </div>
       <div>
        <router-link to='/shareimg'>
          <img src="..\assets\images\jiu\menu2.png" alt="" />
          <span>图片分享</span>
        </router-link>
      </div>
       <div>
        <router-link to='/'>
          <img src="..\assets\images\jiu\menu3.png" alt="" />
          <span>商品购买</span>
        </router-link>
      </div>
    </div>
    <div class="box">
      <div>
        <router-link to='/'>
          <img src="..\assets\images\jiu\menu4.png" alt="" />
          <span>留言反馈</span>
        </router-link>
      </div>
       <div>
        <router-link to='/'>
          <img src="..\assets\images\jiu\menu5.png" alt="" />
          <span>视频专区</span>
        </router-link>
      </div>
       <div>
        <router-link to='/'>
          <img src="..\assets\images\jiu\menu6.png" alt="" />
          <span>联系我们</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 首页轮播图
      lunbo: []
    }
  },
  created() {
    //   调用轮播图方法
    this.getlunbo()
  },
  methods: {
    //   获取首页轮播图方法
    getlunbo() {
      this.$http.get('/api/getlunbo').then(res => {
        console.log(res.data)
        this.lunbo = res.data.message
      })
    }
  }
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
.van-swipe {
  width: 100%;
  height: 200px;
}
.box {
  display: flex;
  div {
    flex:1;
    box-sizing: border-box;
    height: 137px;
    padding: 15px 10px;
    img {
      width: 60px;
      height: 60px;
    }
    span {
      display: block;
      text-align: center;
      margin-top: 10px;
      color: black;
      font-size: 14px;
    }
  }
}
</style>
