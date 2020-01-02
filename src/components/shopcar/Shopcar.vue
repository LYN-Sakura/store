<template>
  <div>
    <!--goods list-->
    <van-row v-for="(item, index) in goodsList" :key="index">
      <van-card :num="item.cou" :price="item.sell_price" :title="item.title" :thumb="item.thumb_path">
        <div slot="footer">
          <van-button size="mini" id="numBtn" @click="subGoods(index)" :disabled="item.cou <= 1 ? true : false">-</van-button>
          <input type="number" id="numInput" v-model="item.cou" @blur="inputText(item.cou, index)" />
          <van-button size="mini" @click="addGoods(index)">+</van-button>
        </div>
      </van-card>
    </van-row>
    <!--submit order-->
    <van-submit-bar :price="allPrice*100" button-text="提交订单" button-type="danger" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // 选择的商品数据列表
      goodsList: [],
      // 总价
      allPrice: 0
    }
  },
  components: {},
  computed: {
    ...mapState(['chooseGoodsId'])
  },
  created() {
    this.getShopCar()
  },
  methods: {
    // 获取商品列表数据
    async getShopCar() {
      const { data: res } = await this.$http.get(`/api/goods/getshopcarlist/${this.chooseGoodsId}`)
      this.goodsList = res.message
      this.totalPrice()
      console.log(this.goodsList)
    },
    // 添加商品数量
    addGoods(i) {
      this.goodsList[i].cou++
      console.log(this.goodsList)
      this.allPrice = 0
      this.totalPrice()
    },
    // 减少商品数量
    subGoods(i) {
      this.goodsList[i].cou--
      this.allPrice = 0
      this.totalPrice()
    },
    // 输入商品数量
    inputText(num, i) {
      if (num <= 1) {
        this.goodsList[i].cou = 1
        return false
      }
      this.allPrice = 0
      this.totalPrice()
    },
    // 计算商品价格总和
    totalPrice() {
      this.goodsList.forEach(item => {
        this.allPrice += item.sell_price * item.cou
      })
    }
  }
}
</script>

<style scoped lang="less">
.van-card {
  margin-bottom: 20px;
}
#carBtn {
  margin-left: -8px;
}
.van-card__num {
  position: relative;
  top: -60px;
}
.van-card__price {
  position: relative;
  top: -40px;
}
.van-button--mini {
  min-width: 32px;
  height: 32px;
  margin-top: -1px;
  span {
    font-size: 24px;
  }
}
#numBtn {
  margin-left: 0px;
  margin-right: 5px;
}
#numInput {
  width: 25px;
  height: 28px;
  padding-left: 15px;
}
.van-card__price-integer {
  color: red;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
