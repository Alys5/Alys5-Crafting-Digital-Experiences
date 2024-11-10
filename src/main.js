// src/main.js
import { createApp, ref, watch } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import './assets/main.css'

// Initialize the Vue application
const app = createApp(App)

// Set the initial language from environment variable or default to English
const language = ref(import.meta.env.VITE_APP_LANGUAGE || 'en')

// Watch for changes in the language variable and update the <html> lang attribute
watch(language, (newLang) => {
  document.documentElement.lang = newLang
})

// Set the document title from the environment variable or default
document.title = import.meta.env.VITE_APP_TITLE || 'Vite App'

// Define translations for supported languages
const messages = {
  en: { message: 'Hello' },
  it: { message: 'Ciao' },
  // Add more languages as needed
}

// Configure Vue I18n for multi-language support
const i18n = createI18n({
  locale: language.value, // Set the current language
  fallbackLocale: 'en', // Default language if translation not available
  messages, // Provide the translation messages
})

// Use Pinia for state management, Router for navigation, and i18n for localization
app.use(createPinia())
app.use(router)
app.use(i18n)

// Mount the application to the #app element in index.html
app.mount('#app')
