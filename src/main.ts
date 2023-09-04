import '@/assets/index.scss'
import '@formkit/themes/genesis'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { ru } from '@formkit/i18n'
import { genesisIcons } from '@formkit/icons'
import { defaultConfig, plugin } from '@formkit/vue'

const app = createApp(App)

app.use(router)
app.use(
  plugin,
  defaultConfig({
    locales: { ru },
    locale: 'ru',
    theme: 'genesis',
    icons: genesisIcons
  })
)
app.mount('#app')
