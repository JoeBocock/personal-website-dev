<template>
    <section id="footer">
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
    </section>
</template>

<script>
export default {
    name: 'SiteFooter',
    props: {
        version: String
    }
}
</script>
