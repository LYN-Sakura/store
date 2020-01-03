<template>
  <div>
    <h1>搜索</h1>

    <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch(value)" @cancel="onCancel" clear />

    <!-- 搜索结果 -->
    <van-swipe-cell v-for="i in searchList" :key="i.id">
      <van-cell>
        {{ i.name }}
      </van-cell>
      <template slot="right">
        <van-button square type="danger" text="删除" @click="delData(i.id)" />
      </template>
    </van-swipe-cell>
    <van-row v-show="rowFlag" type="flex" align="center" justify="space-between">
      <van-col span="20" style="margin-left:20px;text-align:left"><h1>搜索历史</h1></van-col>
      <van-col><van-button type="primary" icon="delete" @click="del"></van-button></van-col>
    </van-row>
    <van-row type="flex" v-show="rowFlag">
      <van-col class="colData" v-for="(i, index) in searchHistory" :key="index">{{ i }}</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      searchList: [],
      searchHistory: [],
      rowFlag: true
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
    }
  }
}
</script>

<style lang="less" scoped>
.van-search__action {
  font-size: 25px !important;
}
.van-cell {
  padding: 0px !important;
  height: 56px !important;
  line-height: 56px !important;
  font-size: 25px !important;
}
.colData {
  background-color: #969799;
  margin: 10px;
  color: #fff;
  height: 38px;
  line-height: 38px;
  font-size: 20px;
  border-radius: 3px;
  padding: 0 8px 0 8px;
}
</style>
