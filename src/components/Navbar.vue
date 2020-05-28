<template>
    <div class="row center">
        <NavbarItem
            :class="{ 'underline' : activeChild == item.id}"
            v-for="item in items"
            :item="item"
            :key="item.id"
        />
    </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue'

export default {
    name: 'Navbar',
    components: {
        NavbarItem
    },
    data: function() {
        return {
            activeChild: 1,
            items: [
                { id: 1, text: 'Bio' },
                { id: 2, text: 'Experience' },
                { id: 3, text: 'Work' },
                { id: 4, text: 'Contact' },
            ]
        }
    },
    methods: {
        activateChild(childId) {
            this.activeChild = childId;
            this.$parent.activateContent(childId);
        }
    }
}
</script>
