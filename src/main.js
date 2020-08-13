import Vue from 'vue';
import App from './App.vue';
import Snake from './libs/Snake.js';

import './assets/styles/skeleton.css';
import './assets/styles/custom.scss';
import './assets/styles/snake.scss';

Vue.config.productionTip = false;

Vue.prototype.$isMobile = (() =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    ))();

window.snake = new Snake('content', [
    'content',
    'nav-container',
    'header-bottom',
]);

window.snake.notify();

window.loop = function(timestamp) {
    var progress = timestamp - window.snake.lastRender;
    // update(progress);
    window.snake.drawSnake(progress);

    window.snake.lastRender = timestamp;
    window.requestAnimationFrame(window.loop);
};

new Vue({
    render: h => h(App),
}).$mount('#app');
