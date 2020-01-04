<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <div class="vip_box">
        <img src="../../assets/image/tx.jpg" alt="" />
        <span>帅潘</span>
        <div>钻石会员</div>
        <i>10000积分</i>
      </div>

      <van-grid :column-num="5"><van-grid-item v-for="item in 5" :key="item" icon="alipay" text="支付宝" /></van-grid>
      <van-collapse class="box" v-model="activeNames" :accordion="false">
        <van-collapse-item title="全部订单" name="1" icon="shopping-cart">您的肾宝片正在配送...</van-collapse-item>
        <van-collapse-item title="分销中心" name="2" icon="phone-circle">六味地黄丸旗舰店</van-collapse-item>
        <van-collapse-item title="我的优惠劵" name="3" icon="label">100元 兰博基里 优惠券</van-collapse-item>
        <van-collapse-item title="我的红包" name="4" icon="gift">2.22元</van-collapse-item>
        <van-collapse-item title="我的会员卡" name="5" icon="vip-card">学生卡</van-collapse-item>
        <van-collapse-item title="我的心愿单" name="6" icon="chat">x9ti-r</van-collapse-item>
        <van-collapse-item title="我的收藏" name="7" icon="column">知乎官网</van-collapse-item>
        <van-collapse-item title="我的购物村" name="8" icon="cart-circle">华强北</van-collapse-item>
      </van-collapse>
      <FooterFrame vipLight="#1989fa"></FooterFrame>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1']
    }
  }
}
</script>

<style lang="less" scoped>
.vip_box {
  width: 100%;
  height: 80px;
  background-color: #2a7424;
  img {
    margin: 18px 15px 20px 15px;
  }
  span {
    position: absolute;
    left: 83px;
    top: 20px;
    color: #fff;
  }
  div {
    position: absolute;
    left: 83px;
    top: 42px;
    color: #fff;
  }
  i {
    position: absolute;
    left: 180px;
    top: 42px;
    color: #fff;
  }
}
.van-collapse-item {
  margin: 10px 0;
}
.main {
  position: relative;
  background-color: #f1f1f1;
}
</style>
