import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view, view2) {
  return () => import( /* webpackChunkName: "view" */ `./views/${view}/${view2 || view}.vue`)
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
  if (to.fullPath === '/refresh') {
    next(from.fullPath)
  } else {
    next()
  }
})

export default router