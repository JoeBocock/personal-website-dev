import anime from 'animejs';

export function lineDraw() {
    anime({
        targets: '.box g path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 2200,
        endDelay: 1000,
        direction: 'alternate',
        loop: true
    });
}
