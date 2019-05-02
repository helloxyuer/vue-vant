import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const switchBtn = {
  state: {
    sidebar: {
      opened: true
    },
  },
  mutations: {
    toggleSideBar(state) {
      state.sidebar.opened = !state.sidebar.opened
    }
  }
}

const store = new Vuex.Store({
  modules: {
    switchBtn
  }
})

export default store
