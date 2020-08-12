<template>
    <section id="content">
        <ContentContainer
            @fireConfetti="fireConfetti"
            @focusInput="focusInput"
            :current-content="activeContent"
        />
        <hr class="bottom-hr" />
        <DesktopInput
            @commandLineRequest="passCommandLineRequest"
            @commandLineError="commandLineError"
            ref="desktopInput"
        />
        <div class="error-container">
            {{ cliError }}
        </div>
        <hr
            v-bind:class="{ invisible: !blinkingHR, blink: blinkingHR }"
            class="bottom-hr"
        />
    </section>
</template>

<script>
import ContentContainer from './ContentContainer.vue';
import DesktopInput from './DesktopInput.vue';
import confetti from 'canvas-confetti';

export default {
    name: 'SiteContent',
    components: {
        ContentContainer,
        DesktopInput,
    },
    props: {
        activeContent: {
            type: Number,
            required: true,
            validator: value => [1, 2, 3, 4].includes(value),
        },
    },
    data: function() {
        return {
            cliError: '',
            confetti: confetti.create(document.getElementById('content'), {
                resize: true,
            }),
            blinkingHR: false,
        };
    },
    watch: {
        activeContent() {
            this.cliError = '';
            this.$refs.desktopInput.input = '';
        },
    },
    methods: {
        passCommandLineRequest(childId) {
            this.$refs.desktopInput.$refs.commandLine.blur();
            this.$emit('commandRequest', childId);
        },
        commandLineError(message) {
            this.cliError = message;
        },
        focusInput() {
            this.$refs.desktopInput.$refs.commandLine.focus();
            this.blinkingHR = true;
            setTimeout(() => (this.blinkingHR = false), 3000);
        },
        fireConfetti() {
            let end = Date.now() + 15 * 30;
            let color = ['#bb0000'];

            (function frame() {
                confetti({
                    particleCount: 1,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: color,
                });
                confetti({
                    particleCount: 1,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: color,
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        },
    },
};
</script>
