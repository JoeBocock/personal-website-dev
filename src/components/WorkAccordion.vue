<template>
    <div class="accordion-container">
        <button
            class="accordion"
            @click="handleDisplay"
            v-bind:class="{ active: expanded }"
            >{{ title }}
        </button>

        <div class="panel" v-if="expanded">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "WorkAccordion",
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: false
    }
  },
  data: function() {
      return {
          expanded: true
      };
  },
  methods: {
      handleDisplay() {
          this.expanded = !this.expanded;
      }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.accordion-container {
    font-size: 1.2rem;
    margin-bottom: 3rem;
}

.accordion-container > button {
    font-size: 1.8rem;
    font-family: "Montserrat Alternates"
}

.accordion {
    background-color: $primary;
    color: $background;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.2s;
}

.accordion:hover {
  background-color: $primary-low-opacity;
}

.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
}

 .accordion:after {
  content: '+';
  float: right;
  font-weight: bold;
}

.active:after {
  content: '-';
}
</style>
