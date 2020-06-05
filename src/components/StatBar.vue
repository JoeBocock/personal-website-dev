<template>
    <div class="loading-bar-container">
        <header>
            {{ title }}
            <small v-if="subTitle">[{{ subTitle }}]</small>
        </header>
        <div>
            <div
                :style="{ 'width': actual + '%'}"
                class="internal-bar"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatBar',
    props: {
        target: {
            type: Number,
            required: true,
            validator: value => (value >= 0 && value <= 100)
        },
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: false
        }
    },
    created: function() {
        setInterval(() => {
            if (this.actual >= this.target) {
                clearInterval();
            } else {
                this.actual++;
            }
        }, 10);
    },
    data: function() {
        return {
            actual: 0
        }
    }
}
</script>
