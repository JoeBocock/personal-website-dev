<template>
    <div id="app" class="container">
        <div>
            <button @click="go">Click Here to Animate</button>
            <div class="block" ref="square" style="background-color: black; width: 100px; height: 100px;"></div>
        </div>
    </div>
</template>

<script>
import { translate } from './animation/animate';

export default {
    name: 'App',
    components: {

    },
    methods: {
        go() {
            translate(this.$refs.square);
        }
    },
    data: function() {
        return {

        }
    }
}
</script>
