<template>
    <section id="header">
        <PageTitle :title="title" />
        <hr>
        <SiteNavbar @requestContent="requestContent"/>
        <hr>
    </section>
</template>

<script>
import PageTitle from './PageTitle.vue'
import SiteNavbar from './SiteNavbar.vue'

export default {
    name: 'SiteHeader',
    components: {
        PageTitle,
        SiteNavbar
    },
    data: function() {
        return {
            title: 'Joe Bocock'
        }
    },
    methods: {
        requestContent(childId) {
            this.$emit('showContent', childId);
        }
    }
}
</script>
