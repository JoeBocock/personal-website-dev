import SnakeEntity from './SnakeEntity.js';

export default class Snake {
    constructor(targetElement = 'app', emptyElement = 'app') {
        this.target = targetElement;
        this.empty = emptyElement;
        this.context = '';
        this.canvas = '';
        this.snake = new SnakeEntity();
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

        this.context.fillRect(10, 10, 10, 10);
    }

    drawSnake() {}

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
