import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enterpriseLeft: Object,
    loginData: {
      information: {
        name: 'kasdhkad',
        age: 'kjasdkas'
      }
    },
    enterpriseInfo: Array,
    enterpriseInfoHeader: Array
  },
  mutations: {
    changeEnterpriseLeft: function (state, data) {
      this.state.enterpriseLeft = data
    },
    login: function (state, data) {
      this.state.loginData = data
    },
    getEnterpriseInfo: function (state, data) {
      this.state.enterpriseInfo = data
    },
    pushEnterprisreInfoHeader: function (state, data) {
      this.state.enterpriseInfoHeader = data
    }
  },
  actions: {

  }
})
