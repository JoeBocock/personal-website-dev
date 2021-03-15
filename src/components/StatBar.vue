<template>
    <div class="loading-bar-container">
        <header>
            {{ title }}
            <small v-if="subTitle">[{{ subTitle }}]</small>
        </header>
        <div>
            <div :style="{ width: actual + '%' }" class="internal-bar" />
        </div>
    </div>
</template>

<script>
export default {
  name: "StatBar",
  props: {
    target: {
      type: Number,
      required: true,
      validator: value => value >= 0 && value <= 100
    },
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false
    }
  },
  data: function() {
    return {
      actual: 0
    };
  },
  created: function() {
    setInterval(() => {
      if (this.actual >= this.target) {
        clearInterval();
      } else {
        this.actual++;
      }
    }, 10);
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.loading-bar-container {
  margin-bottom: 7rem;
  margin-left: 10px;
  margin-right: 10px;
}

.loading-bar-container > header {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
}

.loading-bar-container > header > small {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
}

.loading-bar-container > div {
  margin-bottom: 2rem;
  background: $primary-low-opacity;
}

.internal-bar {
  height: 4px;
  background: $primary;
  width: 0%;
}
</style>
