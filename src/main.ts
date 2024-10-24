import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Login from './views/Login.vue'
import router from './router'
import './index.css'

const app = createApp(Login)

app.use(createPinia())
app.use(router)

app.mount('#app')
