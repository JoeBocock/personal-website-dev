import Vue from 'vue'
import App from './App.vue'

import './assets/styles/skeleton.css'
import './assets/styles/custom.scss'

Vue.config.productionTip = false

Vue.prototype.$isMobile = (() => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))();

new Vue({
  render: h => h(App),
}).$mount('#app')
