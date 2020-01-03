<template>
  <div>
    <HeaderFrame :backIsDispaly="true"></HeaderFrame>
    <div id="main">
      <h4>发表评论</h4>
      <hr />
      <!-- 评论框 -->
      <van-cell-group>
        <van-field class="textarea" rows="4" :value="comments" autosize input-class="textarea" type="textarea" placeholder="请输入留言" />
      </van-cell-group>
      <!-- 评论提交按钮 -->
      <van-button class="btn_commit" type="info" @click="commit">发表评论</van-button>
      <!-- 评论列表 -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in comentList" :key="item" :title="item" />
      </van-list>
      <!-- 加载更多 -->
      <van-button color="#ff4444" plain>加载更多</van-button>
    </div>
    <!-- 底部区域 -->
    <FooterFrame homeLight="#1989fa"></FooterFrame>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: '',
      comentList: [],
      loading: false,
      finished: false
    }
  },
  created() {
    this.getCommens()
  },
  methods: {
    // 获取评论数据
    async getCommens() {
      // 向服务器发送请求
      const { data: res } = await this.$http.get(`/api/getcomments/87?pageindex=1`)
      console.log(res)
      this.comentList = res.message
      console.log(this.comentList)
    },
    //   点击发表评论触发
    commit() {
      if (this.comments === '') {
        this.$toast('留言不能为空')
      }
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>
<style lang="less" scoped>
#main {
  margin-top: 60px;
  padding-left: 5px !important;
  padding-right: 5px !important;
}
h4 {
  text-align: left;
}
[class*='van-hairline']::after {
  border: 1px solid #d1d2d2;
}
btn_commit,
.van-button--normal {
  width: 100%;
  height: 44px;
  margin-top: 5px;
  box-sizing: border-box;
}
.textarea {
  height: 100px;
}
</style>
