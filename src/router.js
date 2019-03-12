import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () =>
		  import(/* webpackChunkName: "about" */ './views/Home')
  },
  {
    path: '/query',
    name: 'query',
    component: () =>
		  import(/* webpackChunkName: "about" */ './views/Query')
  },
  {
    path: '/queryResult',
    name: 'queryResults',
    component: () =>
        import(/* webpackChunkName: "about" */ './components/query/queryResult')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ './views/Login')
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    children: [{
      path: '/baseInformation',
      name: 'baseInformation',
      component: () =>
        import('./components/enterprise/informationStyle/baseInformation')
    }, {
      path: '/enterpriseInformation',
      name: 'enterpriseInformation',
      component: () =>
        import('./components/enterprise/informationStyle/enterpriseInformation')
    }],
    component: () =>
      import(/* webpackChunkName: "about" */ './views/Enterprise')
  }]
})
