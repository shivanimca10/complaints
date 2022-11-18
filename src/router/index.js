import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/add',
    name: 'add',
    component: () => import( '../views/AddComplaint.vue')
  },
  {
    path: '/modify/:id',
    name: 'modify',
    component: () => import( '../views/ModifyComplaint.vue') 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
