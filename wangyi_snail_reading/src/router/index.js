import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/mine'
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: resolve => require(['../components/Home.vue'],resolve)
    // },
    {
        path: '/read',
        name: 'read',
        component: resolve => require(['../components/Home.vue'],resolve)
    },
    {
        path: '/catagory',
        name: 'catagory',
        component: resolve => require(['../components/Home.vue'],resolve)
    },
    {
        path: '/desk',
        name: 'desk',
        component: resolve => require(['../components/Home.vue'],resolve)
    },
    {
      path: '/mine',
      name: 'mine',
      component: resolve => require(['../components/Home.vue'],resolve),
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/Login.vue'], resolve),
      meta: { title: '登录页面'}
    },
    {
      path: '/comment',
      name: 'comment',
      component: resolve => require(['../components/Comment.vue'], resolve),
      meta: { title: '写书评'}
    },
    {
      path: '/article',
      name: 'article',
      component: resolve => require(['../components/Article.vue'], resolve),
      meta: { title: '领读文章详情页'}
    },
    {
      path: '/stock',
      name: 'stock',
      component: resolve => require(['../components/Stock.vue'], resolve),
      meta: { title: '分类详情页'}
    },
  ]
})