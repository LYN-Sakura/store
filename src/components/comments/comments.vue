<template>
  <div>
    <h4>发表评论</h4>
    <hr />
    <div class="text">
      <van-cell-group>
        <van-field v-model="message" rows="2" autosize clearable type="textarea" maxlength="50" placeholder="请输入留言" show-word-limit ref="comform" />
      </van-cell-group>
      <div class="com">
        <van-rate v-model="value" icon="like" void-icon="like-o" touchable allow-half />
        <van-button @click="setcom">发表评论</van-button>
        <ul>
          <div v-for="(item, index) in messagelist" :key="index">
            <h5>第{{ index + 1 }}楼 &nbsp;&nbsp;&nbsp;用户:{{ item.user_name }} 发表时间:{{ item.add_time | dateFormat }}</h5>
            <li>{{ item.content }}</li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Toast } from 'vant'

Vue.use(Field)
export default {
  data() {
    return {
      // 留言内容
      message: '',
      //   星星数量
      value: 0,
      messagelist: [],
      id: ''
    }
  },
  created() {
    this.getid()
    this.getmeslist()
  },
  methods: {
    //   获取id
    getid() {
      var id = window.sessionStorage.getItem('id')
      this.id = id
    },
    //   获取评论列表
    getmeslist() {
      this.$http.get('/api/getcomments/' + this.id + '?pageindex=1').then(res => {
        console.log(res.data)
        this.messagelist = res.data.message
      })
    },
    // 发送评论
    setcom() {
      var params = new URLSearchParams()
      params.append('content', this.$refs.comform.value)
      this.$http.post('/api/postcomment/' + this.id + params).then(res => {
        console.log(res.data)
        if (res.data.status !== 0) {
          return Toast.fail('请求服务器失败')
        }
        Toast.success('发表评论成功')
      })
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  text-align: left;
  padding: 0 10px;
}
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border: 1px solid red;
  margin: 0 20px;
}
.van-button {
  width: 100%;
}
.com {
  padding: 0 10px;
  margin-top: 10px;
  .van-button {
    background-color: skyblue;
    color: white;
  }
  ul {
    padding-top: 5px;
    h5 {
      background-color: rgb(219, 189, 189);
      text-align: left;
      height: 30px;
      margin: 0;
      line-height: 30px;
      font-weight: normal;
    }
    li {
      text-align: left;
      padding-left: 10px;
      height: 35px;
      line-height: 35px;
    }
  }
}
</style>
