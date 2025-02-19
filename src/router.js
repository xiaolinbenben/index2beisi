import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('./views/Download.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('./views/WelCome.vue')
  }
  ]
})

export default router