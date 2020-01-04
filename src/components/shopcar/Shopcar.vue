<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <!--goods list-->
      <van-row v-for="(item, index) in goodsList" :key="item.id">
        <van-card
          @click-thumb="toGoodsInfo(item.id)"
          :num="item.cou"
          :price="item.sell_price + '.00'"
          :title="item.title"
          :thumb="item.thumb_path"
        >
          <div slot="footer">
            <van-button
              size="mini"
              id="numBtn"
              @click="subGoods(item, index)"
              :disabled="item.cou <= 1 ? true : false"
            >-</van-button>
            <input
              type="number"
              id="numInput"
              v-model="item.cou"
              @blur="inputText(item, index)"
              @dblclick="clearText()"
            />
            <van-button size="mini" @click="addGoods(item, index)">+</van-button>
            <van-button id="danBtn" type="danger" @click="danDel(item.id)">删除</van-button>
          </div>
        </van-card>
      </van-row>
      <!--submit order-->
      <van-submit-bar :price="total * 100" button-text="提交订单" button-type="primary">
        <van-button v-show="isBtn" id="delBtn" type="danger" @click="delList">删除订单</van-button>
      </van-submit-bar>
      <div v-show="isImg" @click="toGoodsList" id="showImg">
        <img src="../../assets/images/space.jpg" alt />
      </div>
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
      allPrice: 0,
      isImg: false,
      isBtn: true
    }
  },
  components: {},
  computed: {
    ...mapState(['arr']),
    // 计算商品价格总和
    total() {
      let all = 0
      this.goodsList.forEach(item => {
        all += item.sell_price * item.cou
      })
      return all
    }
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
        this.isImg = true
        this.isBtn = false
        return false
      } else {
        const { data: res } = await this.$http.get(`/api/goods/getshopcarlist/${this.goodsId}`)
        this.goodsList = res.message
        this.arr.forEach((item, index) => {
          this.goodsList[index].cou = item.num
        })
        this.isImg = false
        this.isBtn = true
        // console.log(this.arr)
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
    },
    // 减少商品数量
    subGoods(n, i) {
      this.goodsList[i].cou--
      const add = {
        id: '' + n.id,
        num: n.cou
      }
      this.$store.commit('editAdd', add)
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
    },
    clearText(e) {
      e.target.value.select()
    },
    // 删除所有功能
    delList() {
      window.localStorage.clear()
      // window.location.reload()
      this.goodsList = []
      this.$store.commit('get')
    },
    // 删除单条功能
    danDel(id) {
      id = id + ''
      let str = window.localStorage.getItem('arr')
      let Arr = JSON.parse(str)
      // 获取本地储存的下标
      const i = Arr.findIndex(item => item.id === id)
      // 本地，数据一起删除
      Arr.splice(i, 1)
      this.goodsList.splice(i, 1)
      this.$store.commit('danDel', Arr)
      this.$store.commit('get')
      // window.location.reload()
    },
    toGoodsList() {
      this.$router.push('/goods/list')
    },
    toGoodsInfo(id) {
      this.$router.push('/goods/detail/' + id)
    }
  },
  watch: {
    goodsList() {
      // console.log(this.goodsList.length)
      if (this.goodsList.length && this.goodsList.length !== 0) {
        this.isImg = false
        this.isBtn = true
      } else {
        this.isImg = true
        this.isBtn = false
        this.$store.state.count = 0
      }
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
.van-card__price {
  color: red;
}
#danBtn {
  padding: 0;
  width: 35px;
  height: 32px;
  vertical-align: middle;
  line-height: 32px;
}
#showImg {
  text-align: center;
}
.van-button--hairline.van-button--round::after,
.van-button--round {
  position: fixed;
  right: 5px;
  bottom: 5px;
  width: 88px;
  height: 44px;
  border-radius: 0px;
}
.van-submit-bar__text {
  padding-right: 40%;
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
  vertical-align: middle;
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
  width: 14px;
  height: 23px;
  padding-left: 10px;
}
.van-card__price-integer {
  color: red;
}
#delBtn {
  position: fixed;
  left: 5px;
  bottom: 5px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
}
#numInput[data-v-2b5f06a6] {
  text-align: center;
  min-width: 30px;
  padding: 0;
}
</style>
