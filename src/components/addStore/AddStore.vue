<template>
  <div>
    <HeaderFrame :backIsDispaly="true"></HeaderFrame>
    <div class="main">
      <div class="content">
        <van-field v-model="storeName" placeholder="请输入商品名称" />
        <van-button type="info" @click="addStore" class="infoBtn">添加商品</van-button>
      </div>
    </div>
    <FooterFrame seachLight="#1989fa"></FooterFrame>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeName: ''
    }
  },
  methods: {
    async addStore() {
      let { data: res } = await this.$http.post('/api/addproduct', 'name=' + this.storeName)
      if (res.status !== 0) {
        return this.$notify({
          color: '#fff',
          background: 'red',
          message: '添加失败',
          duration: 500
        })
      }
      this.$notify({
        type: 'success',
        message: '添加成功',
        duration: 500
      })
      this.storeName = ''
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px;
}
.van-field {
  border-bottom: 1px solid #f8f9fa;
}
.infoBtn {
  width: 100%;
  border-radius: 3px;
  margin: 45px auto;
}
</style>
