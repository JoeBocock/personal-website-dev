import Vue from 'vue'
import App from './App.vue'

import './assets/styles/skeleton.css'
import './assets/styles/custom.scss'

Vue.config.productionTip = false

Vue.prototype.$isMobile = (() => (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))();

console.log(`/================================\\
|                                |
|     Having a poke around?      |
|                                |
|     Don't let me stop you!     |
|                                |
|   Try running snake.play();    |
|                                |
|               :)               |
|                                |
|================================|`);

new Vue({
  render: h => h(App),
}).$mount('#app')
