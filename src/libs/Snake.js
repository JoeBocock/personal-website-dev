import SnakeEntity from './SnakeEntity.js';

export default class Snake {
    constructor(targetElement = 'app', emptyElement = 'app') {
        this.target = targetElement;
        this.empty = emptyElement;
        this.context = '';
        this.canvas = '';
        this.snake = new SnakeEntity();
        this.lastRender = 0;
        this.previousFrame = 0;
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
        this.context.translate(0.5, 0.5);
        this.context.lineWidth = 1;
        this.context.fillStyle = '#FF0000';
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
        this.registerListeners();

        this.context.fillRect(10, 10, 10, 10);

        this.lastRender = 0;
        window.requestAnimationFrame(window.loop);
    }

    update(progress) {
        let difference = progress - this.previousFrame;

        console.log(difference);

        this.previousFrame = progress;
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.strokeRect(
            this.snake.x,
            this.snake.y,
            this.snake.width,
            this.snake.height
        );
    }

    registerListeners() {
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case 37:
                    this.snake.currentDirection = this.snake.moveRight;
                    // Move Right
                    break;
                case 38:
                    this.snake.currentDirection = this.snake.moveUp;
                    // Move Up
                    break;
                case 39:
                    this.snake.currentDirection = this.snake.moveLeft;
                    // Move Left
                    break;
                case 40:
                    this.snake.currentDirection = this.snake.moveDown;
                    // Move Down
                    break;

                default:
                    break;
            }
            if (event.keyCode === 39) {
                return;
            }
            // do something
        });
    }

    buildCanvas() {
        let canvas = document.createElement('canvas');
        canvas.setAttribute('id', 'scene');
        canvas.setAttribute('width', 510);
        canvas.setAttribute('height', 510);
        let parent = document.getElementById(this.getTarget());
        parent.appendChild(canvas);
        parent.classList.add('canvas-container');
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
