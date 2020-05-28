<template>
    <div class="title spoon">
        <h2>{{ title }}</h2>
        <h4><vue-typer
            :text="typerItems"
            :erase-delay="eraseDelay"
            :pre-erase-delay="preEraseDelay"
            :pre-type-delay="preTypeDelay"
            caret-animation="phase"
            erase-style="backspace"
        ></vue-typer></h4>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
    name: 'PageTitle',
    components: {
        VueTyper
    },
    props: {
        title: String
    },
    data: function() {
        return {
            typerItems: [
                'Software Developer ',
                'Full Stack ',
                'JS Fanatic ',
                'Data Centric ',
                'AI Worshipper '
            ],
            eraseDelay: 70,
            preEraseDelay: 3000,
            preTypeDelay: 1000
        }
    }
}
</script>
