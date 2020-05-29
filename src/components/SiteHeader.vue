<template>
    <section id="header">
        <PageTitle :title="title" />
        <hr>
        <Navbar/>
        <hr>
    </section>
</template>

<script>
import PageTitle from './PageTitle.vue'
import Navbar from './Navbar.vue'

export default {
    name: 'SiteHeader',
    components: {
        PageTitle,
        Navbar
    },
    data: function() {
        return {
            title: 'Joe Bocock'
        }
    },
    methods: {
        requestContent(childId) {
            this.$parent.activateContent(childId);
        }
    }
}
</script>
