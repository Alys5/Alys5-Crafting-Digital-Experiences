import { createRouter, createWebHistory } from 'vue-router'
import MaintenancePage from '../components/MaintenancePage.vue'

const routes = [
  {
    path: '/',
    name: 'Maintenance',
    component: MaintenancePage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
