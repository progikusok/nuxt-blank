import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/data'
import ui from './modules/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pidor: 1
  },
  modules: {
    ui,
    data
  }
})
