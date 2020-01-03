import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr: [],
    count: 0
  },
  mutations: {
    add(state, obj) {
      const index = state.arr.findIndex(item => item.id === obj.id)
      if (index !== -1) {
        state.arr[index].num += obj.num
      } else {
        state.arr.push(obj)
      }
      window.localStorage.setItem('arr', JSON.stringify(state.arr))
      // 次数
      if (state.arr.length) {
        let num = 0
        state.arr.forEach(item => {
          num += item.num
        })
        state.count = num
      }
    },
    get(state) {
      const arr = window.localStorage.getItem('arr')
      state.arr = JSON.parse(arr)
      // 次数
      if (state.arr.length) {
        let num = 0
        state.arr.forEach(item => {
          num += item.num
        })
        state.count = num
      }
    }
  },
  actions: {},
  modules: {}
})
