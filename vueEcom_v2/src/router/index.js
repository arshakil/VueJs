import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Detail from '@/components/Detail.vue'
import Inventory from '@/components/Inventory.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inventory',
    component: Inventory
  },

  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
