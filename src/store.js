import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enterpriseLeft: Object,
    i: Object
  },
  mutations: {
    changeEnterpriseLeft: function (state,list) {
      this.state.enterpriseLeft = list;
    }
  },
  actions: {

  }
})
