// import '@/assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import pinia from './stores'

const app = createApp(App)

// app.use(pinia)
app.use(router)
app.mount('#app')
