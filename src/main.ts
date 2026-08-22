import { createApp } from 'vue'
import { i18n } from './i18n'
import App from './App.vue'
import './index.css'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister()
    }
  })
}

const app = createApp(App)
app.use(i18n)
app.mount('#app')
