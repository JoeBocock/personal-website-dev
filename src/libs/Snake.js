export default class Snake {
    constructor(targetElement = 'app', emptyElement = 'app') {
        this.target = targetElement;
        this.empty = emptyElement;
    }

    getTarget() {
        return this.target;
    }

    getEmpty() {
        return this.empty;
    }

    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    }

    setupScene(empty) {
        switch (typeof empty) {
            case 'string':
                document.getElementById(empty).innerHTML = '';
                break;

            case 'object':
                empty.forEach(
                    element => (document.getElementById(element).innerHTML = '')
                );
                break;

            default:
                console.log('failed');
                break;
        }
    }

    play() {
        this.setupScene(this.getTarget());
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
