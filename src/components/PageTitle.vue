<template>
    <div class="title">
        <h2>{{ title }}<span class="blink">|</span></h2>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        title: String
    }
}
</script>
