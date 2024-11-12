import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import './assets/main.css'

document.title = import.meta.env.TITLE || 'Alys5 | Crafting Digital Experiences 🎨'

const initialLocale = import.meta.env.LANGUAGE || 'en'
document.documentElement.lang = initialLocale

const i18n = createI18n({
  locale: initialLocale,
  fallbackLocale: 'en',
})

watch(i18n.global.locale, async (newLocale) => {
  const messagesResponse = await import(`./locales/${newLocale}.json`)
  i18n.global.setLocaleMessage(newLocale, messagesResponse.default)
})

const app = createApp(App).use(createPinia()).use(router).use(i18n)

app.config.globalProperties.$changeLanguage = (lang) => {
  i18n.global.locale.value = lang
  document.documentElement.lang = lang
}

app.mount('#app')
