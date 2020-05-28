<template>
    <div class="center" id="version-footer">
        <small> Version
            <span class="brand-color">
                <strong>{{ version }}</strong>
            </span> | Powered by
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="no-highlight">
                <span class="vue-label">
                    <strong>Vue</strong>
                </span>
            </a>
        </small>
    </div>
</template>

<script>
export default {
    name: 'VersionFooter',
    props: {
        version: String
    }
}
</script>
