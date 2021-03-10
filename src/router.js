import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '闯关赢大奖，eSIM手表免费抽'
    },
    component: () => import('./views/Home.vue')
  },
  {
    path: '/gameone',
    name: 'gameone',
    meta: {
      title: '爱“拼”才会赢'
    },
    component: () => import('./views/gameOne.vue')
  },
  {
    path: '/gamethree',
    name: 'gamethree',
    meta: {
      title: '配对“消”消乐'
    },
    component: () => import('./views/gameThree.vue')
  },
  {
    path: '/gamefour',
    name: 'gamefour',
    meta: {
      title: '全民“抓”不停'
    },
    component: () => import('./views/gameFour.vue')
  },
  {
    path: '/gametwo',
    name: 'gametwo',
    meta: {
      title: '挑战“11.11”秒'
    },
    component: () => import('./views/gameTwo.vue')
  },
  {
    path: '/share',
    name: 'share',
    meta: {
      title: '获取额外挑战次数'
    },
    component: () => import('./views/share.vue')
  },
  {
    path: '/quanma',
    name: 'quanma',
    meta: {
      title: '查看券码'
    },
    component: () => import('./views/quanma.vue')
  }
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router
