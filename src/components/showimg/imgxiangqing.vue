<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <h4>{{ imgform.title }}</h4>
    <span id="left">发表时间:{{ imgform.add_time | dateFormat }}</span>
    <span id="right">点击:{{ imgform.click }}</span>
    <div class="middle">
      <van-image width="30%" v-for="(item, index) in imglist" :key="index" :src="item.src" @click="show(index)" lazy-load />
      <p v-html="imgform.content"></p>
    </div>
    <comments></comments>
  </div>
</template>
<script>
import Vue from 'vue'
import { ImagePreview } from 'vant'

Vue.use(ImagePreview)
export default {
  data() {
    return {
      // 点击图片id
      id: '',
      imglist: [],
      imgform: {}
    }
  },
  created() {
    this.saveid()
    this.getimglist()
    this.getimgform()
  },
  methods: {
    // 获取id
    saveid() {
      this.id = window.sessionStorage.getItem('id')
    },
    //   获取id所有对应图片
    getimglist() {
      this.$http.get('/api/getthumimages/' + this.id).then(res => {
        console.log(res.data)
        this.imglist = res.data.message
      })
    },
    // 获取图片的详情
    getimgform() {
      this.$http.get('/api/getimageInfo/' + this.id).then(res => {
        this.imgform = res.data.message[0]
      })
    },
    show(num) {
      var arr = []
      for (var i = 0; i < this.imglist.length; i++) {
        arr.push(this.imglist[i].src)
      }
      ImagePreview({
        images: arr,
        startPosition: num
      })
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  color: #1989fa;
  margin-top: 60px;
}
#left {
  float: left;
  margin-left: 10px;
}
#right {
  float: right;
  margin-right: 10px;
}
.middle {
  border-top: 2px solid red;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}
.van-image {
  margin: 20px 0px 5px 10px;
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);
}
p {
  text-align: left;
  padding-left: 10px;
}
</style>
