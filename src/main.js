// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons'
import messages from './store/messages'

import './assets/main.css'

library.add(faUser, faClock)

// Initialize the Vue application
const app = createApp(App)

// Set the document title from the environment variable or default
document.title = import.meta.env.VITE_APP_TITLE || 'Vite App'

// Configure Vue I18n for multi-language support
const initialLocale = import.meta.env.VITE_APP_LANGUAGE || 'en'
document.documentElement.lang = initialLocale

const i18n = createI18n({
  locale: initialLocale, // Set the current language
  fallbackLocale: 'en', // Default language if translation not available
  messages, // Provide the translation messages
})

// Use Pinia for state management, Router for navigation, and i18n for localization
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(i18n)

// Mount the application to the #app element in index.html
app.mount('#app')
