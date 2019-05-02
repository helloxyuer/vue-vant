import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/Login'),
    name: 'default',
    redirect: 'login',
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    name: 'login',
  },
  {
    path: '/findpwd',
    component: () => import('@/views/FindPwd'),
    name: 'findpwd',
  },
  {
    path: '/resetpwd',
    component: () => import('@/views/ResetPwd'),
    name: 'resetpwd',
  },
  {
    path: '/register',
    component: () => import('@/views/Register'),
    name: 'register',
  },
  {
    path: '/index',
    component: () => import('@/views/Index'),
    name: 'index',
    redirect: {name: 'home'},
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
        name: 'home',
      },
      {
        path: 'market',
        component: () => import('@/views/Market'),
        name: 'market',
      },
      {
        path: 'coin',
        component: () => import('@/views/Coin'),
        name: 'coin',
      },
      {
        path: 'buycoin',
        component: () => import('@/views/BuyCoin'),
        name: 'buycoin',
      },
      {
        path: 'my',
        component: () => import('@/views/My'),
        name: 'my',
      },
    ]
  }
]

let router = new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
  if (to.name != 'login' && !localStorage.getItem('ry-platFormId')) {
    next();
  } else {
    next();
  }
})


export default router
