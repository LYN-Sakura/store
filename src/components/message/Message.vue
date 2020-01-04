<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <h1>在线留言</h1>
      <div class="box">
        <van-cell-group>
          <span>姓名</span>
          <van-field placeholder="请输入姓名" />
        </van-cell-group>
      </div>
      <div class="box">
        <van-cell-group>
          <span>电子邮箱</span>
          <van-field placeholder="请输入电子邮箱" />
        </van-cell-group>
      </div>
      <div class="box">
        <van-collapse v-model="activeNames" :accordion="false">
          <span>需要什么服务呢?</span>
          <van-collapse-item title="请选择" name="1">没有服务</van-collapse-item>
        </van-collapse>
      </div>
      <div class="box">
        <textarea placeholder="请输入留言" cols="50" rows="5"></textarea>
      </div>
      <van-button type="info">提 交</van-button>

      <FooterFrame></FooterFrame>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['0']
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  text-align: center;
  font-weight: 400;
}
.box {
  margin: 20px 15px 25px 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  span {
    margin-left: 16px;

    color: #7a7979;
  }
  textarea {
    border: none;
    margin-top: 10px;
    margin-left: 16px;
  }
}
.van-field {
  font-size: 16px;
  color: #d9dde4;
}
.van-button {
    width: 94%;
    margin: 20px 15px 25px 15px;
    border-radius: 10px;
}
</style>
