<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <van-tabs v-model="active">
        <van-tab title="精选">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item
              ><div class="img_box">
                <img src="../../assets/image/615a4094d143ad4bbf6142168c025aafa50f0607.jpg" />
                <div class="title">
                  <div class="img_di">陈情令:肖战和王一博的爱恨情仇 等你来看!</div>
                </div>
              </div></van-swipe-item
            >
            <van-swipe-item
              ><div class="img_box">
                <img src="../../assets/image/5c401c07a4899.jpg" alt="" />
                <div class="title">
                  <div class="img_di">白蛇~缘起:绝美国漫!</div>
                </div>
              </div></van-swipe-item
            >
            <van-swipe-item
              ><div class="img_box">
                <img src="../../assets/image/timg (1).jpg" alt="" />
                <div class="title">
                  <div class="img_di">超人之钢铁之躯:超人再战江湖!</div>
                </div>
              </div></van-swipe-item
            >
            <van-swipe-item
              ><div class="img_box">
                <img src="../../assets/image/timg.jpg" alt="" />
                <div class="title">
                  <div class="img_di">蜘蛛侠之英雄归来:蜘蛛侠屌丝崛起!</div>
                </div>
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
        <van-tab title="电视剧">
          <h1> 电视剧推荐</h1>
          <van-grid :border="false" :column-num="2">
            <van-grid-item>
              <img src="//i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/m/mzc00200xsbcv8w_big.jpg" alt="" />
              <div class="img_di">边境线之冷焰[会员]</div>
              <span>边防警察异域追击暗战迭起 </span>
            </van-grid-item>
            <van-grid-item>
              <img src="//i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/r/rjae621myqca41h_big.jpg" alt="" />
              <div class="img_di">庆余年[会员先看]</div>
              <span>张若昀陈道明领衔群像传奇</span>
            </van-grid-item>
            <van-grid-item>
              <img src="//i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/m/mzc00200bqxuhqe_big.jpg" alt="" />
              <div class="img_di">精英律师</div>
              <span>靳东蓝盈莹领衔律政戏骨团 </span>
            </van-grid-item>
            <van-grid-item>
              <img src="//i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/m/mzc002005v1t7fz_big.jpg" alt="" />
              <div class="img_di">鳄鱼与牙签鸟</div>
              <span>张天爱陈柏霖异国追爱寻梦 </span>
            </van-grid-item>
          </van-grid></van-tab
        >
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
.van-swipe {
  height: 220px !important;
}
.van-tabs {
  background-color: #f7f7f7;
}
.img_box {
  text-align: center;
  border-bottom: 1px solid #ccc;
  img{height: 220px}
}
.img_di {
  font-size: 20px;
  margin-bottom: 10px;
}
[data-v-bed27f32] {
  width: 100%;
}
.van-swipe-item {
  position: relative;
  div {
    text-align: left;
    margin: 0;
    font-size: 16px;
    color: white;
  }
  .title {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
