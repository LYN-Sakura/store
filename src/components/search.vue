<template>
  <div>
    <h1>搜索</h1>
    <form>
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch(value)" @cancel="onCancel" clear />
    </form>
    <!-- 搜索结果 -->
    <van-row v-for="i in searchList" :key="i.id" type="flex" justify="space-between">
      <van-col style="margin-left:20px;text-align:left">{{ i.name }}</van-col>
      <van-col @click="delData(i.id)"><van-icon name="delete"/></van-col>
    </van-row>
    <van-row v-show="rowFlag" type="flex" align="center">
      <van-col span="20" style="margin-left:20px;text-align:left"><h1>搜索历史</h1></van-col>
      <van-col @click="del"><van-icon name="delete"/></van-col>
    </van-row>
    <van-row type="flex" v-show="rowFlag">
      <van-col v-for="(i, index) in searchHistory" :key="index" style="backgroundColor:#969799;margin:20px;color:#fff">{{ i }}</van-col>
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
      return window.localStorage.getItem('hisData').split(',')
    },
    async onSearch(a) {
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

<style lang="less" scoped></style>
