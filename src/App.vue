<template>
    <div id="app" class="container">
        <section id="header">
            <PageTitle title="Joe Bocock" />
            <hr>
            <Navbar></Navbar>
            <hr>
        </section>

        <section id="content">
            <content-container :currentContent="activeContent"/>
            <hr class="bottom-hr">
            <DesktopInput ref="desktopInput"/>
        </section>

        <section id="footer">
            <VersionFooter :version="version"/>
        </section>
    </div>
</template>

<script>
import PageTitle from './components/PageTitle.vue'
import Navbar from './components/Navbar.vue'
import ContentContainer from './components/ContentContainer.vue'
import DesktopInput from './components/DesktopInput.vue'
import VersionFooter from './components/VersionFooter.vue'
import confetti from 'canvas-confetti'


export default {
    name: 'App',
    components: {
        PageTitle,
        Navbar,
        ContentContainer,
        DesktopInput,
        VersionFooter
    },
    data: function() {
        return {
            version: "3.0",
            activeContent: 1,
            confetti: confetti.create(document.getElementById("content"), { resize: true }),
        }
    },
    methods: {
        activateContent(contentId) {
            this.activeContent = contentId;
        },
        focusInput() {
            this.$refs.desktopInput.$el.focus();
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

<style>
    #app {
        -webkit-font-smoothing: antialiased;
    }
</style>
