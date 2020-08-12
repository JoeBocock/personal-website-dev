<template>
    <div id="app" class="container">
        <SiteHeader
            @showContent="activateContent"
            :active-content="activeContent"
        />
        <SiteContent
            @commandRequest="activateContent"
            :active-content="activeContent"
        />
        <SiteFooter :version="version" />
    </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteContent from './components/SiteContent.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
    name: 'App',
    components: {
        SiteHeader,
        SiteContent,
        SiteFooter,
    },
    data: function() {
        return {
            version: '3.0',
            activeContent: 1,
        };
    },
    watch: {
        activeContent() {
            window.scrollTo(0, 0);
        },
    },
    methods: {
        activateContent(contentId) {
            this.activeContent = contentId;
        },
    },
};
</script>
