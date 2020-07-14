import Vue from 'vue';
import App from './App.vue';

import 'nes.css/css/nes.min.css';
import './assets/styles/custom.scss';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
