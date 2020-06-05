<template>
    <div class="row center">
        <NavbarItem
            v-for="item in items"
            @activateChild="activateChild"
            :item="item"
            :key="item.id"
            :class="{ 'underline' : activeChild == item.id}"
        />
    </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue'

export default {
    name: 'SiteNavbar',
    components: {
        NavbarItem
    },
    props: {
        activeChild: Number
    },
    data: function() {
        return {
            items: [
                { id: 1, text: 'Bio' },
                { id: 2, text: 'Experience' },
                { id: 3, text: 'Skills' },
                { id: 4, text: 'Work' }
            ]
        }
    },
    methods: {
        activateChild(childId) {
            this.$emit('requestContent', childId);
        }
    }
}
</script>
