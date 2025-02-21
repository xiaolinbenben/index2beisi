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
  },
  // 简单地将所有未匹配的路由重定向到首页
  {
    path: '*',
    redirect: '/'
  }]
})

export default router