<template>
    <div id="app">
        <div class="bg-image"></div>

        <div id="window">
            <div id="bar"></div>
            <div id="screen"></div>
        </div>
    </div>
</template>

<script>
import { lineDraw } from './animation/animate';

export default {
    name: 'App',
    components: {},
    mounted: function() {
        lineDraw();
    },
    data: function() {
        return {};
    },
};
</script>
