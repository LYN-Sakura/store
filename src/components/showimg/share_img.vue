<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <!-- tab栏区域 -->
      <van-tabs v-model="active" class="tabHeader" animated @click="getimglist">
        <van-tab title="全部" name="0">
          <div class="box" v-for="item in imglist" :key="item.id">
            <router-link to="/imgxiangqing"><img :src="item.img_url" @click="saveid(item.id)" v-lazy="item.img_url" /></router-link>
            <!-- 黑色区域 -->
            <div class="showdon">
              <p>{{ item.title }}</p>
              <p>{{ item.zhaiyao }}</p>
              <p></p>
            </div>
          </div>
        </van-tab>
        <van-tab v-for="item in catelist" :key="item.id" :title="item.title" :name="item.id">
          <div class="box" v-for="item in imglist" :key="item.id">
            <router-link to="/imgxiangqing"><img :src="item.img_url" @click="saveid(item.id)" v-lazy="item.img_url" /></router-link>
            <!-- 黑色区域 -->
            <div class="showdon">
              <p>{{ item.title }}</p>
              <p>{{ item.zhaiyao }}</p>
              <p></p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <FooterFrame></FooterFrame>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 图片分类种类
      catelist: [],
      //   table栏高亮控制
      active: 0,
      //   图片数据列表
      imglist: []
    }
  },
  created() {
    //   调用获取图片分类种类
    this.getcatelist()
    // 图片列表
    this.getimglist(0)
  },
  methods: {
    //   获取图片分类种类
    getcatelist() {
      this.$http.get('/api/getimgcategory').then(res => {
        console.log(res.data)
        this.catelist = res.data.message
      })
    },
    // 获取图片列表
    getimglist(name) {
      this.$http.get('/api/getimages/' + name).then(res => {
        console.log(res.data.message)
        res.data.message.forEach(item => {
          var substr = item.zhaiyao.substring(0, 30)
          var data = substr + (item.zhaiyao.length > 30 ? '...' : '')
          item.zhaiyao = data
        })
        console.log(res.data.message)
        this.imglist = res.data.message
      })
    },
    // 传递图片id
    saveid(id) {
      window.sessionStorage.setItem('id', id)
    }
  }
}
</script>

<style lang="less" scoped>
.tabHeader {
  color: red;
}
.box {
  padding: 10px;
  position: relative;
}
img {
  width: 100%;
  height: 300px;
  border-radius: 5px;
}
.showdon {
  width: (100%)-5px;
  height: 75px;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 13px;
  border-radius: 5px;
  p {
    color: white;
    font-size: 12px;
    text-align: left;
    padding-left: 10px;
  }
}
</style>
