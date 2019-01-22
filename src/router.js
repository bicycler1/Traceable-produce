import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: () =>
		import ( /* webpackChunkName: "about" */ './views/Home.vue')
	},
	{
		path: '/query',
		name: 'query',
		component: () =>
		import ( /* webpackChunkName: "about" */ './views/Query.vue')
	},
    {
      path: '/login',
      name: 'login',
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: () =>
        import ( /* webpackChunkName: "about" */ './views/Enterprise.vue')
    }]
})
