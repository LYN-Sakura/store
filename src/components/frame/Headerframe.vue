<template>
  <header>
    <div id="back" @click="goback" v-show="backIsDispaly">&lt; 返回</div>
    <div>黑马程序员.vant</div>
  </header>
</template>

<script>
export default {
  props: ['backIsDispaly'],
  data() {
    return {}
  },
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
header {
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #1989fa;
  line-height: 40px;
  font-size: 14px;
  color: white;
  #back {
    width: 80px;
    position: absolute;
  }
}
</style>
