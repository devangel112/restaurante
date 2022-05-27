import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/platillos',
    name: 'platillos',
    component: () => import('../views/PlatillosView.vue')
  },
  {
    path: '/administrador',
    name: 'administrador',
    component: () => import('../views/AdminView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
