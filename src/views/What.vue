<template>
  <div class="what">
    <h1>This is the what page.</h1>
    <hr />
    <br /><br />

    <div class="cards">
      <div class="card">PHP</div>
      <div class="card">Javascript</div>
      <div class="card">Vue</div>
      <div class="card">Laravel</div>
      <div class="card">CodeIgniter</div>
      <div class="card">AWS</div>
      <div class="card">npm</div>
      <div class="card">jQuery</div>
      <div class="card">MySQL</div>
      <div class="card">CSS</div>
      <div class="card">Git</div>
      <div class="card">Vagrant</div>
      <div class="card">Docker</div>
      <div class="card">Hardware</div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/_variables.scss";

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
}

.card {
  border: 2px solid #e7e7e7;
  border-radius: 5px;
  padding: 1rem;
  font-weight: 700;
}
</style>
