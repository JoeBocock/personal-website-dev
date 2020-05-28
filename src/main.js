import Vue from 'vue'
import App from './App.vue'

import './assets/css/skeleton.css'
import './assets/css/custom.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')