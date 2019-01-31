import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enterpriseLeft: Object,
    loginData: Object,
    enterpriseInfo: Array
  },
  mutations: {
    changeEnterpriseLeft: function (state,data) {
      this.state.enterpriseLeft = data;
    },
    login: function (state,data) {
      this.state.loginData = data
    },
    getEnterpriseInfo: function (state,data) {
      this.state.enterpriseInfo = data
    }
  },
  actions: {

  }
})
