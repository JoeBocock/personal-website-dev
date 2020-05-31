<template>
    <div>
        <div v-if="currentContent == 1">
            <p>
                I feel like these introductions are normally cheesy, an attempt at <a href="https://www.reddit.com/r/dadjokes/" target="_blank" rel="noopener noreferrer">humour</a> or too much information at once. Or maybe the mere fact that I acknowledged this paragraph like this makes it cheesier than anything else I could've said. Huh.
            </p>

            <p>
                I'm not great at introducing myself as you can probably tell. Regardless, my name's <a href="https://github.com/JoeBocock" target="_blank" rel="noopener noreferrer">Joe</a>.
            </p>

            <p>
                A quick note about this website before I blabber some more about myself. There's quite a few easter eggs, hidden secrets and nifty things I've included. Some developed by myself, others are <a href="https://github.com/JoeBocock/personal-website-dev/blob/master/package.json" target="_blank" rel="noopener noreferrer">libraries</a> I've pulled in. Have a nosey around and see what you can find.
            </p>

            <p>
                Developing from an early <a class="option" @click="requestConfetti()">love</a> of hardware, my passion for tech has been something that's followed me my entire life. With my first exposure to a desktop environment being powered by a <a href="https://en.wikipedia.org/wiki/Pentium_III" target="_blank" rel="noopener noreferrer">Pentium III</a>, I was off to a speedy start.
            </p>

            <p>
                I should probably mention my preferred dev stack. MacOS development with a Vue frontend powered by a Laravel backend. My work based experience revolves more around CodeIgniter though.
            </p>

            <p>
                <span v-if="$isMobile">
                    Ever wonder what it would be like to navigate websites via the command line? Switch to desktop and read this paragraph again to find out.
                </span>

                <span v-else>
                    Fancy navigating my site via 'command line?' I've written a handler for it into my Vue input component. Go ahead and <i>cd</i> or <i>nano</i> into any of the sections listed in my navbar. It's kinda a treat for actually reading this far. Just simply click underneath the line below this <a class="option" @click="focusInput()">paragraph</a> and start typing.
                </span>
            </p>
        </div>

        <div v-else-if="currentContent == 2">
            <site-timeline :timeline-items="$options.timeline" />
        </div>

        <div v-else-if="currentContent == 3">
            <p>
                This is page three.
            </p>
        </div>

        <div v-else-if="currentContent == 4">
            <p>
                This is page four.
            </p>
        </div>
    </div>
</template>

<script>
import SiteTimeline from './SiteTimeline.vue';
import timeline from './../assets/json/timeline.json';

export default {
    name: 'ContentContainer',
    components: {
        SiteTimeline
    },
    props: {
        currentContent: {
            type: Number,
            required: true,
            validator: value => [1, 2, 3, 4].includes(value)
        }
    },
    methods: {
        requestConfetti() {
            this.$emit('fireConfetti');
        },
        focusInput() {
            this.$emit('focusInput');
        }
    },
    timeline: timeline
}
</script>
