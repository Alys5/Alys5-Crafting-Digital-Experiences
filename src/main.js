import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './locales'
import './assets/main.css'

document.title = import.meta.env.VITE_BASE_TITLE || 'Alys5 | Crafting Digital Experiences '

const app = createApp(App).use(createPinia()).use(router).use(i18n)

app.mount('#app')
