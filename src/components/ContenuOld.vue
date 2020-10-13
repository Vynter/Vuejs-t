<template>
  <div class="container">
    <p>{{ txt }}</p>
    <!-- <Liste v-bind:name="nom"></Liste> -->
    <h1>{{ titre }}</h1>
    <Liste
      v-bind:myArr="films"
      :text="txt"
      v-on:ChangeTitreEv="changement($event)"
    >
      Envoyer<!--slot-->
      <template v-slot:info><h1>Le contenu du slote</h1> </template>
    </Liste>
    <!-- <Liste v-bind:myArr="films" :text="txt"></Liste> -->
  </div>
</template>

<script>
import Liste from "./Liste/Liste.vue";

export default {
  name: "Contenu",
  data() {
    return {
      titre: " c'est le titire",
      txt: "je suis un contenu",
      // nom: "cheraitia",
      films: [
        { titre: "Inception", date: 2010 },
        { titre: "Avatar", date: 2013 },
        { titre: "telnet", date: 2020 },
      ],
    };
  },
  methods: {
    changement: function(newtitre) {
      this.titre = newtitre;
    },
  },
  components: {
    Liste,
  },
};
</script>
