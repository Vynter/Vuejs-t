<template>
  <div class="container mt-5">
    <h1>{{ titre }}</h1>
    <div class="btn btn-outline-dark mr-2" v-on:click="toggleOng1">
      Onglet 1
    </div>
    <div class="btn btn-outline-dark" v-on:click="toggleOng2">Onglet 2</div>

    <div class="onglets card mb-5">
      <texte1 class="p-5" v-if="toggle1"></texte1>
      <texte2 class="p-5" v-if="toggle2"></texte2>
    </div>
    <hr />
    <div class="btn btn-outline-dark mr-2" v-on:click="compo = 'texte1'">
      Onglet 1
    </div>
    <div class="btn btn-outline-dark" v-on:click="compo = 'texte2'">
      Onglet 2
    </div>
    <div class="onglets card mb-5">
      <!-- <texte1 class="p-5" v-if="toggle1"></texte1>
      <texte2 class="p-5" v-if="toggle2"></texte2> -->
      <component class="p-5" v-bind:is="compo"></component>
    </div>

    <div class="btn btn-success" v-on:click="ToggleModale">Ouvrir</div>
    <modal v-bind:Showit="revele" v-bind:togMod="ToggleModale"></modal>
  </div>
</template>

<script>
import Text1 from "./Text1.vue";
import Text2 from "./Text2.vue";
import Modal from "./Modal.vue";

export default {
  name: "Contenu",
  data() {
    return {
      titre: " c'est le titre",
      txt: "je suis un contenu",
      films: [
        { titre: "Inception", date: 2010 },
        { titre: "Avatar", date: 2013 },
        { titre: "telnet", date: 2020 },
      ],
      toggle1: true,
      toggle2: false,
      compo: "texte1",
      revele: false,
    };
  },
  methods: {
    toggleOng1: function() {
      this.toggle1 = true;
      this.toggle2 = false;
    },
    toggleOng2: function() {
      this.toggle2 = true;
      this.toggle1 = false;
    },
    ToggleModale: function() {
      this.revele = !this.revele;
    },
  },
  components: {
    texte1: Text1,
    texte2: Text2,
    modal: Modal,
  },
};
</script>
<style>
.onglets {
  height: 200px;
  overflow: auto;
}
</style>
