<template>
    <div class="title">
        <h2>{{ title }}</h2>
        <span id="custom-heading"
            ><vue-typer
                :text="typerItems"
                :erase-delay="eraseDelay"
                :pre-erase-delay="preEraseDelay"
                :pre-type-delay="preTypeDelay"
                caret-animation="phase"
                erase-style="backspace"
            ></vue-typer
        ></span>
    </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
    name: 'PageTitle',
    components: {
        VueTyper,
    },
    props: {
        title: {
            type: String,
            required: true,
            validator: value => value.length < 20,
        },
    },
    data: function() {
        return {
            typerItems: [
                'Software Developer ',
                'Full Stack ',
                'JS Fanatic ',
                'Data Centric ',
                'AI Worshipper ',
            ],
            eraseDelay: 70,
            preEraseDelay: 3000,
            preTypeDelay: 1000,
        };
    },
};
</script>
