import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',  // 改为 history 模式
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: () => import('./views/MobileHome.vue')
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
  },
   {
    path: '/mobiledownload',
    name: 'mobiledownload',
    component: () => import('./views/MobileDownload.vue')
  }
  ]
})

export default router