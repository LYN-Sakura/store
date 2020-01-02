<template>
  <div id="app">
    <router-link to="/wel">首页</router-link>
    <p></p>
    <router-link to="/search">搜索页面</router-link>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
