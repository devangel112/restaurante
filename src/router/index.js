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
    path: '/platillos/agregar',
    name: 'platillos-agregar',
    component: () => import('../views/AgregarPlatilloView.vue')
  },
  {
    path: '/platillos/modificar',
    name: 'platillos-modificar',
    component: () => import('../views/ModificarPlatilloView.vue')
  },
  {
    path: '/platillos/eliminar',
    name: 'platillos-eliminar',
    component: () => import('../views/EliminarPlatilloView.vue')
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
