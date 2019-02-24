import Vue from 'vue'
import Router from 'vue-router'
import information from './components/enterprise/information'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () =>
		  import(/* webpackChunkName: "about" */ './views/Home.vue')
  },
  {
    path: '/query',
    name: 'query',
    component: () =>
		  import(/* webpackChunkName: "about" */ './views/Query.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "about" */ './views/Login.vue')
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    children: [{
      path: '/baseInformation',
      name: 'baseInformation',
      component: () =>
        import('./components/enterprise/informationStyle/baseInformation')
    }],
    component: () =>
      import(/* webpackChunkName: "about" */ './views/Enterprise.vue')
  }]
})
