import { createApp } from 'vue'
import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies'
import router from './router'
import App from './App.vue'


const app = createApp(App);

app.use(createPinia());

app.use(router);

app.use(VueCookies);

app.mount('#app');
