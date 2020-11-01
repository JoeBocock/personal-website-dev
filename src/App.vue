<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">who</router-link>
      <router-link to="/what">what</router-link>
      <router-link to="/work">work</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/_variables.scss";

body {
  background: $background;
  color: $primary;
  font-weight: 300;
  @media screen and (max-width: $small) {
    margin-left: 10%;
    margin-right: 10%;
  }
  @media screen and (min-width: $medium) {
    margin-left: 15%;
    margin-right: 15%;
  }
}

#app {
  font-family: "Montserrat Alternates", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  display: flex;
  font-size: 1.2rem;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    margin: 30px;
    color: $primary;

    &.router-link-exact-active {
      border-bottom: dotted 1px $primary;
      font-weight: 400;
    }
  }
}
</style>
