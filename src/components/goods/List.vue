<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <div class="goods_list">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in goodsList" :key="item.id" @click="toDetails(item.id)" v-lazy="item.img_url">
              <van-image :src="item.img_url" lazy-load />
              <p>{{ item.title }}</p>
              <div class="bottom_box">
                <div>
                  <span>￥{{ item.sell_price }}</span>
                  <s>￥{{ item.market_price }}</s>
                </div>
                <div>
                  <span>热卖中</span>
                  <span>剩余{{ item.stock_quantity }}件</span>
                </div>
              </div>
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
    <FooterFrame></FooterFrame>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      query: {
        pageindex: 0
      },
      loading: false,
      finished: false,
      isLoading: false
    }
  },
  methods: {
    // 上拉加载
    onLoad() {
      this.query.pageindex++
      // console.log(this.query.pageindex)
      this.getGoodsList()
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.query.pageindex = 0
        this.goodsList = []
        this.onLoad()
      }, 500)
    },
    // 获取总的数据列表
    async getGoodsList() {
      const { data } = await this.$http.get('/api/getgoods', { params: this.query })
      // console.log(data)
      this.loading = false
      if (data.message.length) {
        this.goodsList.push(...data.message)
      } else {
        // 数据全部加载完成
        this.finished = true
      }
    },
    toDetails(id) {
      this.$router.push('/goods/detail/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.van-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px 10px;
  .van-cell {
    width: 48%;
    border: 1px solid #ccc;
    padding: 0;
    align-content: space-between;
    margin: 10px 0;
    .van-image {
      padding: 10px;
      min-height: 180px;
    }
    p {
      font-size: 14px;
      color: #000;
      text-align: left;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      padding: 4px 10px;
      height: 49px;
    }
  }
}
.bottom_box {
  width: 100%;
  background: #eee;
  padding: 5px 0;
  div {
    padding: 0 10px;
  }
  div:first-child {
    text-align: left;
  }
  div:first-child span:first-child {
    font-size: 16px;
    color: red;
    margin-right: 15px;
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
}
</style>
