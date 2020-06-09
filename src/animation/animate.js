import anime from 'animejs';

export function translate(element) {
    anime({
        targets: element,
        translateX: 500,
        endDelay: 200,
        loop: true,
        direction: 'alternate',
    });
}
