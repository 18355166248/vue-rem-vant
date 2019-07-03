import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    network: true // 断网标识
  },
  mutations: {
    STOREChangeNetwork (state, bool) {
      state.network = bool
    }
  },
  actions: {

  }
})
