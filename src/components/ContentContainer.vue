<template>
    <div>
        <p v-if="currentContent == 1">
            I feel like these introductions are normally cheesy, an attempt at <a href="https://www.reddit.com/r/dadjokes/" target="_blank" rel="noopener noreferrer">humour</a> or too much information at once. Or maybe the mere fact that I acknowledged this paragraph like this makes it cheesier than anything else I could've said. <a href="https://www.google.com/search?q=define+huh&oq=define+huh&aqs=chrome..69i57j0l7.3959j1j4&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">Huh.</a><br><br>I'm not great at introducing myself as you can probably tell. Regardless, my name's <a href="https://github.com/JoeBocock" target="_blank" rel="noopener noreferrer">Joe</a>.<br><br>Developing from an early <a class="option" @click="requestConfetti()">love</a> of hardware, my passion for tech has been something that's followed me my entire life. With my first exposure to a desktop environment being powered by a <a href="https://en.wikipedia.org/wiki/Pentium_III" target="_blank" rel="noopener noreferrer">Pentium III</a>, I was off to a speedy start.<br><br> I should probably mention my preferred dev stack. MacOS development with a Vue frontend powered by a Laravel backend. My work based experience revolves more around CodeIgniter though.<br><br> <span v-if="$isMobile">Ever wonder what it would be like to navigate websites via the command line? Switch to desktop and read this paragraph again to find out.</span><span v-else>Fancy navigating my site via 'command line?' I've written a handler for it into my Vue input component. Go ahead and <i>cd</i> or <i>nano</i> into any of the sections listed in my navbar. It's kinda a treat for actually reading this far. Just simply click underneath the line below this <a class="option" @click="focusInput()">paragraph</a> and start typing.</span>
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
