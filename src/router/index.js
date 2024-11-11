import { createRouter, createWebHistory } from 'vue-router'
import MaintenancePage from '../view/MaintenancePage.vue'
import HomePage from '../view/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/maintenance', name: 'Maintenance', component: MaintenancePage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
