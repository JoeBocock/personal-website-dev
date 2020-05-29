<template>
    <section id="content">
        <ContentContainer :currentContent="activeContent"/>
        <hr class="bottom-hr">
        <DesktopInput ref="desktopInput"/>
        <hr class="bottom-hr" v-bind:class="{ invisible: !blinkingHR, blink: blinkingHR }">
    </section>
</template>

<script>
import ContentContainer from './ContentContainer.vue'
import DesktopInput from './DesktopInput.vue'
import confetti from 'canvas-confetti'

export default {
    name: 'PageTitle',
    props: {
        activeContent: Number
    },
    components: {
        ContentContainer,
        DesktopInput
    },
    data: function() {
        return {
            confetti: confetti.create(document.getElementById("content"), { resize: true }),
            blinkingHR: false
        }
    },
    methods: {
        focusInput() {
            this.$refs.desktopInput.$el.focus();
            this.blinkingHR = true;
            setTimeout(() => this.blinkingHR = false, 3000);
        },
        fireConfetti() {
            let end = Date.now() + (15 * 30);
            let color = ['#bb0000'];

            (function frame() {
                confetti({
                    particleCount: 1,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: color
                });
                confetti({
                    particleCount: 1,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: color
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    }
}
</script>
