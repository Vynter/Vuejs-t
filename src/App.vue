<template>
  <div id="app">
    <header-top></header-top>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <contenu></contenu>
    <!-- <Liste></Liste> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Contenu from "./components/Contenu.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    //HelloWorld
    Contenu, //1er représentation d'un compo
    "header-top": Header, //2eme représentation d'un comp
    //Liste,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
