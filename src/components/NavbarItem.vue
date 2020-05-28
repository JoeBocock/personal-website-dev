<template>
    <div class="three columns">
        <span @click="notifyParent" class="option">{{ item.text }}</span>
    </div>
</template>

<script>
export default {
    name: 'NavbarItem',
    props: {
        item: Object
    },
    methods: {
        notifyParent: function () {
            this.$parent.activateChild(this.item.id);
        }
    }
}
</script>
