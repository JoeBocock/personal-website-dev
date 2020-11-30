<template>
  <div class="what">
    <input type="email" name="email" placeholder="Search my skillset..." />
    <br /><br />

    <div class="cards">
      <div class="card">PHP <span style="float:right;">59%</span></div>
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
  background: rgb(60, 76, 92);
  background: -moz-linear-gradient(
    225deg,
    rgba(60, 76, 92, 1) 0%,
    rgba(44, 62, 80, 1) 85%
  );
  background: -webkit-linear-gradient(
    225deg,
    rgba(60, 76, 92, 1) 0%,
    rgba(44, 62, 80, 1) 85%
  );
  background: linear-gradient(
    225deg,
    rgba(60, 76, 92, 1) 0%,
    rgba(44, 62, 80, 1) 85%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3c4c5c",endColorstr="#2c3e50",GradientType=1);
  color: $background;
}

input {
  width: 98%;
  font-size: 2rem;
  border-bottom: 2px solid rgb(60, 76, 92);
  min-height: 60px;
  padding: 10px;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  font-family: inherit;
  transition: all 0.5s ease;
  opacity: 0.3;
}

input:focus {
  opacity: 1;
}
</style>
