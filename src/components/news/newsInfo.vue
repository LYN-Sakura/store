<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <div class="pad">
        <van-loading size="30px" color="#1989fa" />
        <div v-for="v in newInfoList" :key="v.id">
          <van-row class="header">
            <h3>{{ v.title }}</h3>
            <div class="dateAndCLick">
              <div class="leftDate">发表时间：{{ v.add_time | dateYMD }}</div>
              <div class="rightClick">点击次数：{{ v.click }}</div>
            </div>
          </van-row>
          <article id="text"><div v-for="(txt, i) in v.content" :key="i" v-html="txt"></div></article>
        </div>
        <comments></comments>
      </div>
      <FooterFrame homeLight="#1989fa"></FooterFrame>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newInfoList: [],
      newsId: ''
    }
  },
  methods: {
    getUrl() {
      this.newsId = this.$route.params.id
      // 本地存储评论所需的id
      window.sessionStorage.setItem('id', this.newsId)
    },
    async getNewsList() {
      let { data: res } = await this.$http.get(`api/getnew/${this.newsId}`)
      if (res.status !== 0) {
        return this.$notify({
          color: '#fff',
          background: 'red',
          message: '获取失败',
          duration: 500
        })
      }
      this.newInfoList = res.message
      this.newInfoList.forEach(val => {
        val.content = val.content.split('</p>')
        val.content.splice(val.content.length - 1, 1)
        let newContent = []
        val.content.forEach(v => {
          v = v.replace(/(<p>|\r|\t|\n)+/g, '')
          v = v.replace(/<b>/g, '<b style="font-size: 17px;">')
          newContent.push(v)
        })
        val.content = newContent
      })
      this.offLoading()
    },
    // 关闭加载动画
    offLoading() {
      document.querySelectorAll('.van-loading')[0].classList.add('showLoading')
    }
  },
  created() {
    this.getUrl()
    this.getNewsList()
  }
}
</script>

<style lang="less" scoped>
.header {
  padding-bottom: 6px;
  border-bottom: 1px solid #cccccc;
}
h3 {
  text-align: center;
  color: #1989fa;
  font-size: 14px;
  padding-bottom: 10px;
}
.dateAndCLick {
  height: 20px;
  font-size: 13px;
  color: #1989fa;
  .leftDate {
    float: left;
    margin-left: 5px;
  }
  .rightClick {
    float: right;
    margin-right: 5px;
  }
}
.pad {
  padding: 0 10px;
}
#text {
  margin-top: 10px;
  div {
    text-indent: 2em;
    font-size: 14px;
    margin: 5px 0;
  }
}
</style>
