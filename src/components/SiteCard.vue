<template>
    <div class="card center tiny-margin-top">
        <div class="card-title">
            <a
                :href="link"
                target="_blank"
                rel="noopener noreferrer"
            >{{ title }}</a>
        </div>
        <div class="container card-body">
            <hr>
            <p v-html="content"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatBar',
    props: {
        title: {
            type: String,
            required: true,
            validator: value => value.length > 0
        },
        link: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: true
        }
    }
}
</script>
