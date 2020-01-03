<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div style="padding:10px ; margin:40px 0 ; text-align:left ">
      <div class="swipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
            <img v-lazy="image" style="width: 200px; height: 200px; display: block; margin: auto;" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="goodsInfo">
        <div class="goodsInfoTitle">{{ this.goodsInfo.title }}</div>
        <p>
          市场价：
          <s>￥{{ this.goodsInfo.market_price }}</s>
          销售价
          <em>￥{{ this.goodsInfo.sell_price }}</em>
        </p>
        <div class="count">
          <span>购买数量</span>
          <van-stepper v-model="value" />
        </div>
        <div class="btns">
          <van-button type="info">立即购买</van-button>
          <van-button type="danger" @click="addCat">加入购物车</van-button>
        </div>
      </div>
      <div class="goodsParams">
        <div class="goodsParamsTitle">商品参数</div>
        <div class="body">
          <p>商品货号：{{ this.goodsInfo.goods_no }}</p>
          <p>库存情况：{{ this.goodsInfo.stock_quantity }}</p>
          <p>上架时间：{{ this.goodsInfo.add_time }}</p>
        </div>
        <div class="btns">
          <van-button plain type="info" block @click="toGoodsDesc(urlId)">图文介绍</van-button>
          <van-button plain type="danger" block @click="toGoodsComments(urlId)">商品评论</van-button>
        </div>
      </div>
    </div>
    <FooterFrame homeLight="#1989fa"></FooterFrame>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeImages: [],
      urlId: 87,
      goods: [],
      goodsInfo: {},
      value: 1
    }
  },
  created() {
    this.getImages()
    this.getGoodsInfo()
  },
  methods: {
    async getImages() {
      this.urlId = this.$route.params.id
      const { data } = await this.$http.get('/api/getthumimages/' + this.urlId)
      this.swipeImages = data.message
      // console.log(this.swipeImages)
    },
    async getGoodsInfo() {
      const { data } = await this.$http.get('/api/goods/getinfo/' + this.urlId)
      this.goodsInfo = data.message[0]
      // console.log(this.goodsInfo)
    },
    // 去图文详情
    toGoodsDesc(id) {
      this.$router.push('/goodsdesc/' + id)
    },
    // 去评论
    toGoodsComments(id) {
      this.$router.push('/goodscomments/' + id)
    },
    addCat() {
      const add = {
        id: this.urlId,
        num: this.value,
        price: this.goodsInfo.sell_price,
        status: true
      }
      this.$store.commit('add', add)
    }
  }
}
</script>

<style lang="less" scoped>
// 轮播图
.swipe {
  border: 1px solid #ccc;
  height: 230px;
  border-radius: 3px;
}
// 商品信息
.goodsInfo {
  margin-top: 10px;
  padding: 15px;
  border-radius: 3px;
  border: 1px solid #ccc;
  .goodsInfoTitle {
    border-bottom: 1px solid #ccc;
  }
  p {
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 10px;
    color: #8f8f94;
    em {
      font-weight: 700;
      font-size: 16px;
      color: red;
      font-style: normal;
    }
  }
  .count {
    padding: 10px;
    .van-stepper {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
    }
  }
  .btns {
    .van-button {
      margin: 3px 3px;
      height: 33px;
      line-height: 33px;
    }
  }
}
// 商品参数
.goodsParams {
  margin-top: 10px;
  padding: 15px;
  border-radius: 3px;
  border: 1px solid #ccc;
  .goodsParamsTitle {
    border-bottom: 1px solid #ccc;
    font-size: 17px;
    padding-bottom: 10px;
  }
  .body {
    border-bottom: 1px solid #ccc;
    padding: 15px;
    p {
      font-size: 14px;
      margin: 10px 0;
      color: #8f8f94;
    }
  }
  .btns {
    margin-top: 10px;
    .van-button {
      height: 39px;
      line-height: 39px;
      border-radius: 5px;
      margin: 5px 0;
    }
  }
}
</style>
