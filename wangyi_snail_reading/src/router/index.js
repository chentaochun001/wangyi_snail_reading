import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/reader'
    },
    {
        path: '/home',
        name: 'home',
        component: resolve => require(['../components/Home.vue'],resolve)
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
      path: '/reader',
      name: 'reader',
      component: resolve => require(['../components/Reader.vue'],resolve)
    },
  ]
})