import { createRouter, createWebHashHistory } from 'vue-router'

import Precios from '../views/PreciosView'
import inicio from '../views/Inicio'
import pedido from '../views/PedidoView'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: inicio
  },
  {
    path: '/precios',
    name: 'Precios',
    component: Precios
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: pedido
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
