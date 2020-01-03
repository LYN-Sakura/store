<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <!--goods list-->
      <van-row v-for="(item, index) in goodsList" :key="index">
        <van-card :num="item.cou" :price="item.sell_price" :title="item.title" :thumb="item.thumb_path">
          <div slot="footer">
            <van-button size="mini" id="numBtn" @click="subGoods(item, index)" :disabled="item.cou <= 1 ? true : false">-</van-button>
            <input type="number" id="numInput" v-model="item.cou" @blur="inputText(item, index)" />
            <van-button size="mini" @click="addGoods(item, index)">+</van-button>
          </div>
        </van-card>
      </van-row>
      <!--submit order-->
      <van-button id="delBtn" type="primary" @click="delList">删除订单</van-button>
      <van-submit-bar :price="allPrice * 100" button-text="提交订单" button-type="danger" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      // 选择的商品数据列表
      goodsList: [],
      // 选择的商品id
      goodsId: [],
      // 总价
      allPrice: 0
    }
  },
  components: {},
  computed: {
    ...mapState(['arr'])
  },
  created() {
    this.$store.commit('get')
    this.getShopCar()
  },
  methods: {
    // 获取商品列表数据
    async getShopCar() {
      this.arr.forEach(item => {
        this.goodsId.push(item.id)
      })
      this.goodsId = this.goodsId.join(',')
      if (this.arr.length === 0) {
        return false
      } else {
        const { data: res } = await this.$http.get(`/api/goods/getshopcarlist/${this.goodsId}`)
        this.goodsList = res.message
        this.arr.forEach((item, index) => {
          this.goodsList[index].cou = item.num
        })
        this.totalPrice()
        console.log(this.arr)
      }
    },
    // 添加商品数量
    addGoods(n, i) {
      this.goodsList[i].cou++
      const add = {
        id: '' + n.id,
        num: n.cou
      }
      this.$store.commit('editAdd', add)
      this.allPrice = 0
      this.totalPrice()
    },
    // 减少商品数量
    subGoods(n, i) {
      this.goodsList[i].cou--
      const add = {
        id: '' + n.id,
        num: n.cou
      }
      this.$store.commit('editAdd', add)
      this.allPrice = 0
      this.totalPrice()
    },
    // 输入商品数量
    inputText(n, i) {
      if (n.cou <= 1) {
        this.goodsList[i].cou = 1
        const add = {
          id: '' + n.id,
          num: n.cou
        }
        this.$store.commit('editAdd', add)
        this.allPrice = 0
        this.totalPrice()
        return false
      }
      const add = {
        id: '' + n.id,
        num: n.cou
      }
      this.$store.commit('editAdd', add)
      this.allPrice = 0
      this.totalPrice()
    },
    // 计算商品价格总和
    totalPrice() {
      this.goodsList.forEach(item => {
        this.allPrice += item.sell_price * item.cou
      })
    },
    delList() {
      localStorage.clear()
      location.reload()
    }
  }
}
</script>

<style scoped lang="less">
.main {
  position: relative;
  height: 100%;
  margin-top: 40px;
}
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
#delBtn {
  position: fixed;
  left: 0;
  bottom: 50px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
