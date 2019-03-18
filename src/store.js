import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enterpriseLeft: Object,
    loginData: {
      information: {
        username: '华科',
        idCard: '666666',
        '企业地址': '湖北省武汉市',
        '企业邮箱': '123456@qq.com',
        '企业负责人': '许长乐',
        '负责人电话': '1822586632'
      }
    },
    queryData: {},
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
