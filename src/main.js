import { createApp } from 'vue';
import App from './App.vue';
import { VueYandexMaps } from 'vue-yandex-maps';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const settings = {
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1',
};

const app = createApp(App);
app.use(VueYandexMaps, settings);
app.mount('#app');
