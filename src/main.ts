import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'  // Asegúrate de que esté importando App.vue
import router from './router'
import './index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
