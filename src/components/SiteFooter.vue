<template>
    <section id="footer">
        <div
            id="version-footer"
            class="center"
        >
            <small> Version
                <span class="brand-color">
                    <strong>{{ version }}</strong>
                </span> | Powered by
                <a
                    href="https://vuejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="no-highlight"
                >
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
        version: {
            type: String,
            required: true
        }
    }
}
</script>
