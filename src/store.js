import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enterpriseLeft: Object,
    loginData: {
      information: {
        name: 'kasdhkad',
        age: 'kjasdkas',
        name1: 'kasdhkad',
        age1: 'kjasdkas',
        name3: 'kasdhkad',
        age3: 'kjasdkas'
      }
    },
    queryData: {
      name: 'adshaldasd',
      age: 'aldhksa'
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
    },
    pushQueryData: function (state, data) {
      this.state.queryData = data
    }
  },
  actions: {

  }
})
