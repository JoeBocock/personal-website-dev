<template>
    <div id="app">
        <div class="bg-image"></div>

        <div id="window">
            <div id="bar">
                <div id="window-title">
                    <img src="./assets/images/mouse.png" alt="" />
                    <strong>Microdoft Messenger</strong>
                </div>
                <div id="window-icons">
                    <div id="primary-icon" class="bar-icon">
                        <strong>_</strong>
                    </div>
                    <div id="error-icon" class="bar-icon">
                        <strong>X</strong>
                    </div>
                </div>
            </div>
            <div id="screen"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    mounted: function() {},
    data: function() {
        return {};
    },
};
</script>
