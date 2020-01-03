<template>
  <div>
    <h4>发表评论</h4>
    <hr />
    <div class="text">
      <van-cell-group>
        <van-field v-model="message" rows="2" autosize clearable type="textarea" maxlength="50" placeholder="请输入留言" show-word-limit ref="comform" />
      </van-cell-group>
      <div class="com">
        <div>请根据你的满意度进行打分:</div>
        <van-rate v-model="value" icon="like" void-icon="like-o" touchable allow-half />
        <van-button @click="setcom">发表评论</van-button>
        <ul>
          <div v-for="(item, index) in messagelist" :key="index">
            <h5>第{{ index + 1 }}楼 &nbsp;&nbsp;&nbsp;用户:{{ item.user_name }} 发表时间: {{ item.add_time | dateYMD }}</h5>
            <li>{{ item.content }}</li>
          </div>
        </ul>
      </div>
      <van-button class="footbtn" @click="addsub">加载更多</van-button>
    </div>
    <!-- 彩蛋区 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div>谢谢亲的五星好评哦!</div>
        <img src="../../assets/images/u=446745173,1825858413&fm=26&gp=0[1].jpg" />
      </div>
    </van-overlay>
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
      //   截取后的list长度
      messagelist: [],
      id: '',
      //   截取长度
      sub: 5,
      //   总共list的条数
      maxlist: [],
      show: false
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
        this.maxlist = res.data.message
        if (res.data.message.length > 5) {
          var message = res.data.message.slice(0, this.sub)
        }
        this.messagelist = message
      })
    },
    // 发送评论
    setcom() {
      if (this.value === 0) {
        return Toast.fail('请先进行评分')
      } else if (this.value === 5) {
        this.show = true
      }
      var params = new URLSearchParams()
      params.append('content', this.$refs.comform.value)
      this.$http.post('/api/postcomment/' + this.id, params).then(res => {
        console.log(res.data)
        if (res.data.status !== 0) {
          return Toast.fail('请求服务器失败')
        }
        Toast.success('发表评论成功')
        this.message = ''
        this.value = 0
        this.getmeslist()
      })
    },
    // 增加显示条数
    addsub() {
      if (this.messagelist < this.maxlist) {
        this.sub = this.sub + 5
        this.getmeslist()
      } else {
        return Toast.fail('没有更多评论了')
      }
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
.footbtn {
  border: 1px solid red;
  color: red;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    width: 200px;
    height: 200px;
  }
  div {
    height: 100px;
    color: white;
    font-size: 25px;
  }
}
</style>
