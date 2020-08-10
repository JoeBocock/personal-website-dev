<template>
    <section id="header">
        <PageTitle :title="title" />
        <hr>
        <SiteNavbar
            @requestContent="requestContent"
            :active-child="activeContent"
        />
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
    props: {
        activeContent: {
            type: Number,
            required: true,
            validator: value => [1, 2, 3, 4].includes(value)
        }
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
