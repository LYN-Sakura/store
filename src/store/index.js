import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr: []
  },
  mutations: {
    add(state, obj) {
      const index = state.arr.findIndex(item => item.id === obj.id)
      if (index !== -1) {
        console.log(state.arr)
        state.arr[index].num += obj.num
      } else {
        state.arr.push(obj)
      }
      window.localStorage.setItem('arr', JSON.stringify(state.arr))
    },
    get(state) {
      const arr = window.localStorage.getItem('arr')
      state.arr = arr
    }
  },
  actions: {},
  modules: {}
})
