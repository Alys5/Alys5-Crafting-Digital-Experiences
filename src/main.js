import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from './store/messages'

import './assets/main.css'

document.title = import.meta.env.TITLE || 'Alys5 | Crafting Digital Experiences 🎨'
const initialLocale = import.meta.env.LANGUAGE || 'en'
document.documentElement.lang = initialLocale

const i18n = createI18n({
  locale: initialLocale, // Set the current language
  fallbackLocale: 'en', // Default language if translation not available
  messages, // Provide the translation messages
})

const app = createApp(App).use(createPinia()).use(router).use(i18n)

app.mount('#app')
