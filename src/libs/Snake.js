import SnakeEntity from './SnakeEntity.js';

export default class Snake {
    constructor(targetElement = 'app', emptyElement = 'app') {
        this.target = targetElement;
        this.empty = emptyElement;
        this.context = '';
        this.canvas = '';
        this.snake = new SnakeEntity();
        this.lastRender = 0;
    }

    getTarget() {
        return this.target;
    }

    getEmpty() {
        return this.empty;
    }

    setCanvas(canvas) {
        this.canvas = canvas;
    }

    setContext() {
        this.context = this.canvas.getContext('2d');
    }

    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    }

    play() {
        this.setupScene();
    }

    setupScene() {
        switch (typeof this.getEmpty()) {
            case 'string':
                document.getElementById(this.getEmpty()).innerHTML = '';
                break;

            case 'object':
                this.getEmpty().forEach(
                    element => (document.getElementById(element).innerHTML = '')
                );
                break;

            default:
                console.log('failed');
                break;
        }

        this.buildCanvas();
        this.setContext();

        this.y = 10;
        this.x = 10;
        this.context.fillRect(10, 10, 10, 10);

        this.lastRender = 0;
        window.requestAnimationFrame(window.loop);
    }

    drawSnake() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillRect(this.x, this.y, 10, 10);
        this.x++;
        this.y++;
    }

    drawComponent() {}

    buildCanvas() {
        let canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'scene');
        canvas.classList.add('canvas-container');
        document.getElementById(this.getTarget()).appendChild(canvas);
        this.setCanvas(canvas);
    }

    /**
     * I know this looks ugly but back-tick logging, what ya gonna do?
     *
     *  ¯\_(ツ)_/¯
     */
    notify() {
        if (this.isMobile()) {
            return;
        }

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
    }
}
