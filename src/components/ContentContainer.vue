<template>
    <div>
        <p v-if="currentContent == 1">
            I feel like these introductions are normally cheesy, an attempt at <a href="https://www.reddit.com/r/dadjokes/" target="_blank" rel="noopener noreferrer">humour</a> or too much information at once. Or maybe the mere fact that I acknowledged this paragraph like this makes it cheesier than anything else I could've said. <a href="https://www.google.com/search?q=define+huh&oq=define+huh&aqs=chrome..69i57j0l7.3959j1j4&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">Huh.</a><br><br>I'm not great at introducing myself as you can probably tell. Regardless, my name's <a href="https://github.com/JoeBocock" target="_blank" rel="noopener noreferrer">Joe</a>.<br><br>Developing from an early <a class="option" @click="requestConfetti()">love</a> of hardware, my passion for tech has been something that's followed me my entire life. With my first exposure to a desktop environment being powered by a <a href="https://en.wikipedia.org/wiki/Pentium_III" target="_blank" rel="noopener noreferrer">Pentium III</a>, I was off to a speedy start.<br><br> I should probably mention my top level preferred dev stack. MacOS with a Vue frontend powered by a Laravel backend. My work based experience more revolves around CodeIgniter though.<br><br> Fancy navigating my site via command line? I've written a handler for it into my Vue input <a class="option" @click="focusInput()">component.</a> CD or Nano into any of the section within my navbar. Think of it as a treat for actually reading this far.
        </p>

        <p v-if="currentContent == 2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p v-if="currentContent == 3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p v-if="currentContent == 4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
</template>

<script>
export default {
    name: 'ContentContainer',
    props: {
        currentContent: Number
    },
    methods: {
        requestConfetti() {
            this.$parent.fireConfetti();
        },
        focusInput() {
            this.$parent.focusInput();
        }
    }
}
</script>
