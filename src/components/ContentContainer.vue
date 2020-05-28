<template>
    <p v-html="content"></p>
</template>

<script>
export default {
    name: 'ContentContainer',
    props: {
        content: String
    }
}
</script>
