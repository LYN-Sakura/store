<template>
  <header>
    <div class="back" @click="goback" v-show="backIsDisplay">
      <van-icon name="arrow-left" />
      返回
    </div>
    <div>黑马程序员.vant</div>
    <div class="add" @click="toAdd" v-show="addIsDisplay">添加</div>
  </header>
</template>

<script>
export default {
  props: ['backIsDisplay', 'addIsDisplay'],
  data() {
    return {}
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    toAdd() {
      this.$router.push('/addStore')
    }
  }
}
</script>

<style lang="less" scoped>
header {
  position: fixed;
  text-align: center;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 40px;
  background-color: #1989fa;
  line-height: 40px;
  font-size: 14px;
  color: white;
  .back,
  .add {
    width: 80px;
    position: absolute;
  }
  .back .van-icon {
    vertical-align: -15%;
  }
  .add {
    top: 0;
    right: 0;
  }
}
</style>
