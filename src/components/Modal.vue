<template>
  <div class="bloc-modale" v-if="Showit">
    <div class="overlay" v-on:click="togMod">></div>
    <div class="modale card">
      <button class="btn-modale btn btn-danger" v-on:click="togMod">X</button>
      <h2>contenu du modale</h2>
      <!-- {{ textModal }} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["Showit", "togMod"],
};
</script>

<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.modale {
  color: #333;
  background: gainsboro;
  padding: 50px;
  position: fixed;
}
.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
