export default class Snake {
    constructor(targetElement = 'app') {
        this.target = targetElement;
    }

    getTarget() {
        return this.target;
    }

    setupScene(targetElement) {
        switch (typeof targetElement) {
            case 'string':
                document.getElementById(targetElement).innerHTML = '';
                break;

            case 'object':
                targetElement.forEach(
                    element => (document.getElementById(element).innerHTML = '')
                );
                break;

            default:
                console.log('failed');
                break;
        }
    }

    test() {
        console.log('Test Ran');
    }

    notify() {
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
