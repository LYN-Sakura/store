<template>
  <div>
    <HeaderFrame :backIsDisplay="true"></HeaderFrame>
    <div class="main"><comments></comments></div>
    <FooterFrame></FooterFrame>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    getUrl() {
      // 本地存储评论所需的id
      window.sessionStorage.setItem('id', this.$route.params.id)
    }
  },
  created() {
    this.getUrl()
  }
}
</script>

<style lang="less" scoped></style>
