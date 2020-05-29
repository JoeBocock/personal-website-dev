import Vue from 'vue'
import App from './App.vue'

import './assets/css/skeleton.css'
import './assets/css/custom.css'

Vue.config.productionTip = false

Vue.prototype.$isMobile = (() => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))();

new Vue({
  render: h => h(App),
}).$mount('#app')
