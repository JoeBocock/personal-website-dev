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
.what {
  margin-top: 70px;
}
</style>

<script>
import StatBar from "../components/StatBar.vue";
import stats from "./../assets/json/stats.json";

export default {
  name: "App",
  components: {
    StatBar
  },
  stats: stats
};
</script>
