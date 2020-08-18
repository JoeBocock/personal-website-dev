<template>
    <div>
        <div v-if="currentContent == 1">
            <div class="center">
                <br />
                <br />
                <h4 class="option" @click="requestConfetti()">
                    🎉 Happy Birthday, Leah 🎉
                </h4>
                <br />
                <br />
            </div>

            <p>
                I feel like these introductions are normally cheesy, an attempt
                at
                <a
                    href="https://www.reddit.com/r/dadjokes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >humour</a
                >
                or too much information at once. Or maybe the mere fact that I
                acknowledged this paragraph like this makes it cheesier than
                anything else I could've said. Huh.
            </p>

            <p>
                I'm not great at introducing myself as you can probably tell.
                Regardless, my name's
                <a
                    href="https://github.com/JoeBocock"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Joe</a
                >.
            </p>

            <p>
                A quick note about this website before I blabber some more about
                myself. There's a couple easter eggs, hidden secrets and nifty
                things I've included. Some developed by myself, others are
                <a
                    href="https://github.com/JoeBocock/personal-website-dev/blob/master/package.json"
                    target="_blank"
                    rel="noopener noreferrer"
                    >libraries</a
                >
                I've pulled in. Have a nosey around and see what you can find.
            </p>

            <p>
                Developing from an early
                <a class="option" @click="requestConfetti()">love</a> of
                hardware, my passion for tech has been something that's followed
                me my entire life. With my first exposure to a desktop
                environment being powered by a
                <a
                    href="https://en.wikipedia.org/wiki/Pentium_III"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Pentium III</a
                >, I was off to a speedy start.
            </p>

            <p>
                I should probably mention my preferred dev stack. MacOS
                development with a Vue frontend powered by a Laravel backend. My
                work based experience revolves more around CodeIgniter though.
            </p>

            <p>
                <span v-if="$isMobile">
                    Ever wonder what it would be like to navigate websites via
                    the command line? Switch to desktop and read this paragraph
                    again to find out.
                </span>

                <span v-else>
                    Fancy navigating my site via 'command line?' I've written a
                    handler for it into my Vue input component. Go ahead and
                    <i>cat</i> or <i>nano</i> any of the sections listed in my
                    navbar. It's kinda a treat for actually reading this far.
                    Just simply click underneath the final HR on the page or
                    <a class="option" @click="focusInput()">here</a> and start
                    typing.
                </span>
            </p>

            <p>
                Thank you for taking the time to read my inane typings. If for
                whatever reason, you'd like to get in contact with me, please
                use the email below. I should reply farely quickly but I'm
                normally faster on weekdays.
            </p>

            <div class="row center">
                <div class="columns four">
                    <a
                        href="https://github.com/joebocock"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Github</a
                    >
                </div>
                <div class="columns four">
                    <a href="mailto:joebocock@gmail.com">joebocock@gmail.com</a>
                </div>
                <div class="columns four">
                    <a
                        href="https://www.linkedin.com/in/joe-bocock-976341181"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Linkedin</a
                    >
                </div>
            </div>
        </div>

        <div v-else-if="currentContent == 2">
            <site-timeline :timeline-items="$options.timeline" />
        </div>

        <div v-else-if="currentContent == 3">
            <StatBar
                v-for="stat in $options.stats"
                :key="stat.id"
                :target="stat.target"
                :title="stat.title"
                :sub-title="stat.subTitle"
            />
        </div>

        <div v-else-if="currentContent == 4">
            <SiteCard
                title="Cardios"
                link="https://github.com/JoeBocock/cardios"
                :content="$options.work.cardios"
            />

            <SiteCard
                title="Personal Website"
                link="https://github.com/JoeBocock/personal-website-dev"
                :content="$options.work.personal"
            />

            <SiteCard
                title="Grab and Go"
                link="https://github.com/JoeBocock/cardios"
                :content="$options.work.grabandgo"
            />

            <SiteCard
                title="And Many Others..."
                link="https://github.com/JoeBocock?tab=repositories"
                :content="$options.work.other"
            />
        </div>
    </div>
</template>

<script>
import SiteTimeline from './SiteTimeline.vue';
import StatBar from './StatBar.vue';
import SiteCard from './SiteCard.vue';
import timeline from './../assets/json/timeline.json';
import stats from './../assets/json/stats.json';
import work from './../assets/json/work.json';

export default {
    name: 'ContentContainer',
    components: {
        SiteTimeline,
        StatBar,
        SiteCard,
    },
    props: {
        currentContent: {
            type: Number,
            required: true,
            validator: value => [1, 2, 3, 4].includes(value),
        },
    },
    methods: {
        requestConfetti() {
            this.$emit('fireConfetti');
        },
        focusInput() {
            this.$emit('focusInput');
        },
    },
    timeline: timeline,
    stats: stats,
    work: work,
};
</script>
