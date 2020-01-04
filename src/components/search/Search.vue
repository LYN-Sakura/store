<template>
  <div>
    <HeaderFrame :backIsDisplay="true" :addIsDisplay="true"></HeaderFrame>
    <div class="main">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch(value)" @cancel="onCancel" clear />
      <!-- 搜索结果 -->
      <van-swipe-cell v-for="i in searchList" :key="i.id">
        <van-cell>{{ i.name }}</van-cell>
        <template slot="right">
          <van-button square type="danger" text="删除" @click="delData(i.id)" />
        </template>
      </van-swipe-cell>
      <div class="historyBox" v-show="rowFlag">
        <div class="history">
          <div>搜索历史</div>
          <div @click="del"><van-icon name="delete" /></div>
        </div>
        <van-divider v-show="hasHistory">暂无搜索历史</van-divider>
      </div>

      <van-row class="historyData" type="flex" v-show="rowFlag">
        <span @click="historyToSearch(i)" class="colData" v-for="(i, index) in searchHistory" :key="index">{{ i }}</span>
      </van-row>
    </div>
    <FooterFrame searchLight="#1989fa"></FooterFrame>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      searchList: [],
      searchHistory: [],
      rowFlag: true,
      hasHistory: true
    }
  },
  created() {
    this.initdata()
  },
  methods: {
    initdata() {
      var par1 = window.localStorage.getItem('hisData')
      if (par1) {
        this.searchHistory = par1.split(',')
      }
    },
    getdata(a) {
      var par = window.localStorage.getItem('hisData')
      if (!par) {
        window.localStorage.setItem('hisData', a)
      } else {
        var b = `${par},${a}`
        window.localStorage.setItem('hisData', b)
      }
      var arr = window.localStorage.getItem('hisData').split(',')
      return Array.from(new Set(arr))
    },
    async onSearch(a) {
      if (a.trim().length === 0) {
        this.$alert({
          message: '请输入搜索内容'
        })
        return
      }
      let { data } = await this.$http.get('api/getprodlist')
      this.searchList = data.message
      // this.cellFlag = true
      this.searchHistory = this.getdata(a)
      this.rowFlag = false
    },
    onCancel() {
      this.searchList = ''
      this.rowFlag = true
    },
    del() {
      window.localStorage.clear()
      this.searchHistory = ''
    },
    async delData(a) {
      this.$http.get(`api/delproduct/${a}`)
      let { data } = await this.$http.get('api/getprodlist')
      this.searchList = data.message
    },
    historyToSearch(i) {
      this.value = i
      this.onSearch(this.value)
    }
  },
  watch: {
    searchHistory() {
      if (this.searchHistory.length && this.searchHistory.length !== 0) {
        this.hasHistory = false
      } else {
        this.hasHistory = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-search {
  box-sizing: content-box;
  height: 30px;
  font-size: 14px;
  .van-search__content {
    height: 35px;
  }
  .van-search__action {
    width: 28px;
    height: 35px;
    line-height: 35px;
    margin-right: 5px;
    padding-left: 10px;
    text-align: center;
  }
  .van-cell {
    line-height: 25px;
  }
}
.history {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  div:first-child {
    margin-left: 12px;
  }
  div:last-child {
    margin-right: 12px;
  }
}
.historyData {
  margin-left: 12px;
  margin-top: 15px;
  font-size: 12px;
  .colData {
    border: none;
    margin: 3px;
    padding: 3px 6px;
    border-radius: 3px;
    background-color: #969799;
    color: white;
  }
}
</style>
