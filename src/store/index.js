import Vue from 'vue'
import Vuex from 'vuex'
import Base from './Base'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Base
  }
})
