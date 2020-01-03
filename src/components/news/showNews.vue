<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
        <div class="lists">
          <van-loading size="30px" color="#1989fa" />
          <van-row class="list" v-for="v in newsList" :key="v.id">
            <router-link class="aLink" :to="`/newsInfo?id=${v.id}`">
              <div class="imgBox" span="1">
                <!-- 图片 -->
                <img v-for="(img, i) in v.img_url" :key="i" v-lazy="img" />
              </div>
              <div class="infoBox">
                <div class="infoTop">{{ v.zhaiyao }}</div>
                <div class="infoBottom">
                  <div class="infoBottomLeft">
                    发表时间：
                    <span>{{ v.add_time | dateYMD }}</span>
                  </div>
                  <div class="infoBottomRight">点击：{{ v.click }}</div>
                </div>
              </div>
            </router-link>
          </van-row>
        </div>
      </van-pull-refresh>
    </div>
    <FooterFrame homeLight="#1989fa"></FooterFrame>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [],
      isLoading: false
    }
  },
  methods: {
    async getNewsList() {
      let { data: res } = await this.$http.get('/api/getnewslist')
      if (res.status !== 0) {
        return this.$notify({
          color: '#fff',
          background: 'red',
          message: '获取失败',
          duration: 500
        })
      }
      this.newsList = res.message
      this.offLoading()
      this.newsList.forEach(v => {
        v.img_url = [v.img_url]
      })
    },
    // 关闭加载动画
    offLoading() {
      document.querySelectorAll('.van-loading')[0].classList.add('showLoading')
    },
    // 刷新
    onRefresh() {
      setTimeout(() => {
        this.getNewsList()
        this.isLoading = false
      }, 500)
    }
  },
  created() {
    this.getNewsList()
  }
}
</script>

<style lang="less" scoped>
.lists {
  padding: 0 10px;
  a {
    color: #000;
  }
}
.list {
  height: 70px;
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
}
.imgBox {
  width: 50px;
  height: 40px;
  box-sizing: border-box;
  padding: 0 5px;
  img {
    width: 100%;
    height: 100%;
  }
}
.aLink {
  display: flex;
}
.infoBox {
  width: 100%;
  margin-left: 5px;
}
.infoTop {
  font-size: 14px;
  text-align: left;
}
.infoBottom {
  font-size: 12px;
  color: #2281ff;
  margin-top: 7px;
}
.infoBottomLeft {
  float: left;
}
.infoBottomRight {
  float: right;
}
</style>
