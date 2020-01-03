<template>
  <div class="vip">
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main">
      <van-icon class="setBtn" name="setting-o" />
      <h3>正在加班加点开发中，敬请期待！</h3>
    </div>
    <FooterFrame vipLight="#1989fa"></FooterFrame>
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
.setBtn {
  font-size: 30px;
  margin-top: 30px;
  animation: move linear 2s infinite;
}
@keyframes move {
  0% {
  }
  100% {
    transform: rotate(360deg);
  }
}
.main{
    text-align: center;
}
.vip h3 {
  font-weight: normal;
}
</style>
