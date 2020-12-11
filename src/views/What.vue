<template>
  <div class="what">
    <StatBar
      v-for="stat in $options.stats"
      :key="stat.id"
      :target="stat.target"
      :title="stat.title"
      :sub-title="stat.subTitle"
    />
  </div>
</template>

<style lang="scss">
@import "../assets/styles/_variables.scss";
</style>

<script>
import StatBar from "../components/StatBar.vue";
// import stats from "./../assets/json/stats.json";

export default {
  name: "App",
  components: {
    StatBar
  },
  data: function() {
    return {
      version: "3.1.0",
      activeContent: 1
    };
  },
  watch: {
    activeContent() {
      window.scrollTo(0, 0);
    }
  },
  methods: {
    activateContent(contentId) {
      this.activeContent = contentId;
    }
  },
//   stats: stats
};
</script>
