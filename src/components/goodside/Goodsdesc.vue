<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <h4>{{ msg.title }}</h4>
      <hr />
      <div class="art" v-html="article" ref="artRef"></div>
    </div>
    <!-- 底部区域 -->
    <FooterFrame class="foot"></FooterFrame>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      msg: {},
      article: ''
    }
  },
  updated() {
    this.$refs.artRef.style.color = '#030737'
  },
  created() {
    this.getPicText()
  },
  computed: {
    ...mapState(['chooseGoodsId'])
  },
  methods: {
    test() {
      return (this.id = this.$store.commit('get'))
    },
    async getPicText() {
      const { data: res } = await this.$http.get(`/api/goods/getdesc/${this.$route.params.id}`)
      console.log(res)
      if (res.status !== 0) return this.$toast.fail('获取数据失败')
      // 将获取到的数据保存
      this.msg = res.message[0]
      // 替换富文本标签里面的img
      let newData = res.message[0].content.replace(/<img/gi, '<img style="width:100%"')
      let data = newData.replace(/<table width=/gi, '<table width="100%">')
      // console.log(newData)
      // console.log(data)
      this.article = data
    }
  }
}
</script>
<style lang="less" scoped>
body {
  width: 100% !important;
}
.main {
  position: relative;
  width: 100%;
  min-width: 300px;
  height: 100%;
  margin-top: 80px;
  bottom: 30px;
  text-align: center;
  h4 {
    color: #226aff;
    width: 100%;
  }
  .art {
    text-align: center;
    // text-indent: 2em;
    line-height: 40px;
  }
}
.foot {
  height: 50px;
}
</style>
