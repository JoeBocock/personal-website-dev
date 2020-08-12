<template>
    <div class="timeline-item">
        <header>{{ title }}</header>
        <div v-html="content" />
    </div>
</template>

<script>
export default {
    name: 'TimelineItem',
    props: {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
};
</script>
