import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Manage from '@/views/Manage.vue'
import Audit from '@/views/Audit.vue'
import Visual from '@/views/Visual.vue'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: { requiresAuth: true }
  },
  { path: '/manage', name: 'Manage', component: Manage },
  { path: '/audit', name: 'Audit', component: Audit },
  { path: '/visual', name: 'Visual', component: Visual },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isLogin = sessionStorage.getItem('isLogin') === 'true'
  if (to.meta.requiresAuth && !isLogin) {
    next('/login')
  } else {
    next()
  }
})
// 登录成功后设置
// sessionStorage.setItem('isLogin', 'true')

export default router