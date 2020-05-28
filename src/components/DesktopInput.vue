<template>
    <input v-if="showInput" type="text">
</template>

<script>
export default {
    name: 'DesktopInput',
    computed: {
        showInput: function () {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return false;
            } else {
                return true;
            }
        }
    }
}
</script>
