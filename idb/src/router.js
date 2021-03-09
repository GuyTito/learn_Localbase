import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./views/Add.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./views/Edit.vue')
    }
  ]
})