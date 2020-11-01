<template>
  <div class="who">
    <h1 class="xxl-heading">Hey There,</h1>
    <h1 class="xl-heading">I'm Joe</h1>

    <p>
      Software developer and
      <vue-typer text="dog lover." erase-delay="1000"></vue-typer>
    </p>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  components: {
    VueTyper
  }
};
</script>

<style lang="scss">
.xxl-heading {
  font-size: 7em;
  margin-bottom: 0;
}

.xl-heading {
  font-size: 4em;
  margin-top: 0;
}

.who {
  text-align: center;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.vue-typer {
  .custom.char {
    color: #2c3e50;
  }
}
</style>
