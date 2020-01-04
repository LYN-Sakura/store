<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <van-divider><h1>联 系 我 (give me mony)</h1></van-divider>
      <div class="box">
        <div>姓名 ( mony )</div>
        <div>电话 ( 1008611 )</div>
        <div>信息 ( H R )</div>
      </div>
      <FooterFrame></FooterFrame>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin-top: 100px;
  font-weight: 400;
}
.box div {
  margin: 80px 70px;
  text-align: center;
  color: #ccc;
}
</style>
