<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <van-tabs v-model="active">
        <van-tab title="精选">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item
              ><div class="img_box">
                <img src="../../assets/image/615a4094d143ad4bbf6142168c025aafa50f0607.jpg" alt="" />
                <div class="img_di">陈情令</div>
                <span>肖战和王一博的爱恨情仇 等你来看!</span>
              </div></van-swipe-item
            >
            <van-swipe-item
              ><div class="img_box">
                <img src="../../assets/image/5c401c07a4899.jpg" alt="" />
                <div class="img_di">白蛇~缘起</div>
                <span>绝美国漫!</span>
              </div></van-swipe-item
            >
            <van-swipe-item
              ><div class="img_box">
                <img src="../../assets/image/timg (1).jpg" alt="" />
                <div class="img_di">超人之钢铁之躯</div>
                <span>超人再战江湖!</span>
              </div></van-swipe-item
            >
            <van-swipe-item
              ><div class="img_box">
                <img src="../../assets/image/timg.jpg" alt="" />
                <div class="img_di">蜘蛛侠之英雄归来</div>
                <span>蜘蛛侠屌丝崛起!</span>
              </div></van-swipe-item
            >
          </van-swipe>
          <h1>今日热点推荐</h1>
          <van-grid :border="false" :column-num="2">
            <van-grid-item>
              <img src="../../assets//image/1.jpg" alt="" />
              <div class="img_di">大汉情缘之云中歌</div>
              <span>来看Boby超神演技</span>
            </van-grid-item>
            <van-grid-item>
              <img src="../../assets/image/2.jpg" alt="" />
              <div class="img_di">维多利亚的秘密</div>
              <span>性感尤物闪耀现场</span>
            </van-grid-item>
            <van-grid-item>
              <img src="../../assets/image/3.jpg" alt="" />
              <div class="img_di">诛仙之青云志</div>
              <span>赵丽颖杨紫谁是女主!</span>
            </van-grid-item>
            <van-grid-item>
              <img src="../../assets/image/4.jpg" alt="" />
              <div class="img_di">吐槽大会</div>
              <span>本次主咖PDD!</span>
            </van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="电视剧">懒得写</van-tab>
        <van-tab title="电影">懒得写</van-tab>
        <van-tab title="综艺">懒得写</van-tab>
        <van-tab title="NBA">懒得写</van-tab>
        <van-tab title="游戏">懒得写</van-tab>
        <van-tab title="少儿">懒得写</van-tab>
        <van-tab title="纪录片">懒得写</van-tab>
      </van-tabs>
      <FooterFrame></FooterFrame>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.van-tabs {
  background-color: #f7f7f7;
}
.img_box {
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.img_di {
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
