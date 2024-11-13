import { createRouter, createWebHistory } from 'vue-router'
import Trans from '@/locales/translation'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import MaintenanceView from '../views/MaintenanceView.vue'
import ErrorView from '../views/ErrorView.vue'

const createLocaleProps = (route) => ({ locale: route.params.locale })

const routes = [
  {
    path: '/:locale?',
    beforeEnter: Trans.routeMiddleware,
    children: [
      { path: '', name: 'home', component: HomeView, props: createLocaleProps },
      { path: 'About', name: 'about', component: AboutView, props: createLocaleProps },
      { path: 'Contact', name: 'contact', component: ContactView, props: createLocaleProps },
      { path: 'Projects', name: 'projects', component: ProjectsView, props: createLocaleProps },
      {
        path: 'Maintenance',
        name: 'Maintenance',
        component: MaintenanceView,
        props: createLocaleProps,
        beforeEnter: (to, from, next) => {
          if (import.meta.env.VITE_MAINTENANCE_MODE !== 'true') {
            next({ name: 'home', params: to.params })
          } else {
            next()
          }
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: ErrorView,
    beforeEnter: (to, from, next) => {
      if (import.meta.env.VITE_MAINTENANCE_MODE !== 'true') {
        next()
      } else {
        next({ name: 'Maintenance', params: to.params })
      }
    },
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
  strict: true,
})
