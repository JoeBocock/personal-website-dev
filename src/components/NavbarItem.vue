<template>
    <div class="three columns">
        <span @click="notifyParent" class="option">{{ item.text }}</span>
    </div>
</template>

<script>
export default {
    name: 'NavbarItem',
    props: {
        item: {
            type: Object,
            required: true,
            validator: value => 'text' in value,
        },
    },
    methods: {
        notifyParent: function() {
            this.$emit('activateChild', this.item.id);
        },
    },
};
</script>
