import { createRouter, createWebHistory } from 'vue-router'
import MaintenancePage from '../view/MaintenancePage.vue'
import HomePage from '../view/HomePage.vue'

const isMaintenanceMode = true // Set to false to disable maintenance mode

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/maintenance', name: 'Maintenance', component: MaintenancePage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Redirect to maintenance page if maintenance mode is enabled and the current route is the home page
router.beforeEach((to, from, next) => {
  if (isMaintenanceMode && to.name === 'Home') {
    next({ name: 'Maintenance' })
  } else {
    next()
  }
})

export default router
