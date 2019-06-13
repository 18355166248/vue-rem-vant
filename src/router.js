import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'vant'

Vue.use(Router)

function loadView (view, view2) {
  return () =>
    import(/* webpackChunkName: "view" */ `./views/${view}/${view2 ||
      view}.vue`)
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: '登录',
      component: loadView('login')
    },
    {
      path: '/refresh',
      name: 'refresh',
      component: loadView('refresh')
    },
    {
      path: '/main',
      name: 'main',
      redirect: '/main/home',
      component: loadView('main'),
      children: []
    },
    {
      path: '*',
      component: loadView('notFound')
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.toast = Toast.loading({
    duration: 0,
    forbidClick: true, // 禁用背景点击
    loadingType: 'spinner'
  })
  next()
  // if (to.fullPath === '/refresh') {
  //   next(from.fullPath)
  // } else {
  //   next()
  // }
})

router.afterEach((to, form) => {
  window.toast.clear()
})

export default router
