import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../components/Home.vue'],resolve)
    },
    {
        path: '/read',
        name: 'read',
        component: resolve => require(['../components/Read.vue'],resolve)
    },
    {
        path: '/catagory',
        name: 'catagory',
        component: resolve => require(['../components/Catagory.vue'],reslove)
    },
    {
        path: '/desk',
        name: 'desk',
        component: resolve => require(['../components/Desk.vue'],reslove)
    },
    {
      path: '/mine',
      name: 'mine',
      component: resolve => require(['../components/Mine.vue'],resolve)
    },
  ]
})