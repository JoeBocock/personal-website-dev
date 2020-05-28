<template>
    <div id="app" class="container">
        <section id="header">
            <PageTitle title="Joe Bocock, software developer." />
            <hr>
            <Navbar></Navbar>
            <hr>
        </section>

        <section id="content">
            <content-container :content="content[activeContent]"/>
            <hr class="bottom-hr">
            <DesktopInput/>
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
            content: {
                1: `I feel like these introductions are normally cheesy, an attempt at humour or too much information at once. Or maybe the mere fact that I acknowledged this paragraph like this makes it cheesier than anything else I could've said. Huh.
                    <br>
                    <br>
                    I'm not great at introducing myself as you can probably tell. Regardless, my name's Joe.
                    <br>
                    <br>
                    Developing from an early love of hardware, my passion for tech has been something that's followed me my entire life.`
            }
        }
    }
}
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
    }
</style>
