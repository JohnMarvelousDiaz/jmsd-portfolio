import './assets/styles/main.css'
import './assets/styles/style.css'

import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('Icon', Icon)

app.use(router)

app.mount('#app')
