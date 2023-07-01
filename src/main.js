import { createApp } from 'vue'
import Vue3Geolocation from 'vue3-geolocation';
import { createPinia } from 'pinia'
import router from "./router"
import App from './App.vue'
import './style.css'


import '@fortawesome/fontawesome-free/css/all.css';


const app = createApp(App)

     app.use(createPinia())
     app.use(router);
     app.use(Vue3Geolocation);
     app.mount('#app')




// import store from "./store"
// app.use(store);