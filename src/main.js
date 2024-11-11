import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from './store/messages'

import './assets/main.css'

document.title = import.meta.env.TITLE || 'Alys5 | Crafting Digital Experiences 🎨'

// Recupera la lingua iniziale
const initialLocale = import.meta.env.LANGUAGE || 'en'
document.documentElement.lang = initialLocale

// Crea l'istanza di i18n
const i18n = createI18n({
  locale: initialLocale, // Imposta la lingua iniziale
  fallbackLocale: 'en', // Lingua di fallback
  messages, // Le traduzioni
})

const app = createApp(App).use(createPinia()).use(router).use(i18n)

// Funzione per cambiare la lingua dinamicamente
app.config.globalProperties.$changeLanguage = (lang) => {
  i18n.global.locale = lang
  document.documentElement.lang = lang
}

app.mount('#app')
