<template>
    <div class="timeline">
        <TimelineItem
            v-for="item in timelineItems"
            :key="item.id"
            :title="item.title"
            :content="item.content"
        />
    </div>
</template>

<script>
import TimelineItem from './TimelineItem.vue'

export default {
    name: 'SiteTimeline',
    components: {
        TimelineItem
    },
    props: {
        timelineItems: {
            type: Object,
            required: true
        }
    }
}
</script>
