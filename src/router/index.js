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
  },
  {
    path: '/administrador/platillos/agregar',
    name: 'administrador-platillos-agregar',
    component: () => import('../views/AgregarPlatilloView.vue')
  },
  {
    path: '/administrador/platillos/modificar',
    name: 'administrador-platillos-modificar',
    component: () => import('../views/ModificarPlatilloView.vue')
  },
  {
    path: '/administrador/platillos/eliminar',
    name: 'administrador-platillos-eliminar',
    component: () => import('../views/EliminarPlatilloView.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  /* base: process.env.BASE_URL, */
  routes
})

export default router
