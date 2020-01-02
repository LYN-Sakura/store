<template>
  <div>
    <!-- 头部区域 -->
    <HeaderFrame :backIsDispaly="false"></HeaderFrame>
    <!-- 预留路由占位符 -->
    <div class="main"><router-view></router-view></div>
    <!-- 底部区域 -->
    <FooterFrame></FooterFrame>
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
.main {
  width: 100%;
  height: 728px;
}
</style>
