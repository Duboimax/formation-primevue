import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVueManager from './services/PrimevueManager';

const app = createApp(App)

app.use(PrimeVueManager)

app.mount('#app')
