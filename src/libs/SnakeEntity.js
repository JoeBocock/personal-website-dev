export default class SnakeEntity {
    constructor() {
        this.x = 60;
        this.y = 30;
        this.width = 30;
        this.height = 30;
        this.currentDirection = this.moveLeft;
    }

    moveRight() {
        this.x = this.x + this.width;
    }

    moveUp() {
        this.y = this.y - this.height;
    }

    moveLeft() {
        this.x = this.x - this.width;
    }

    moveDown() {
        this.y = this.y + this.width;
    }
}
