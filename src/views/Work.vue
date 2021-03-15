<template>
  <div class="work">
    <WorkAccordion
      v-for="work in $options.work"
      :key="work.id"
      :title="work.title"
      :content="work.content"
    />
  </div>
</template>

<style lang="scss">
.work {
  margin-top: 70px;
}
</style>

<script>
import WorkAccordion from "../components/WorkAccordion.vue";
import work from "./../assets/json/work.json";

export default {
  name: "App",
  components: {
    WorkAccordion
  },
  work: work
};
</script>
