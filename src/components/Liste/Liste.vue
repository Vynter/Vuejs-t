<template>
  <div>
    <!-- <ul class="list">
      <li v-for="(fruit, index) in fruits" v-bind:key="index">{{ fruit }}</li>
    </ul>
    {{ name }}
    <p>
      {{ reversing() }}
    </p> -->
    <ul class="list">
      <li v-for="(film, index) in myArr" v-bind:key="index">
        <div class="card">
          <div class="card-body">
            Titre : {{ film.titre }} - Année {{ film.date }}
          </div>
        </div>
      </li>
      <p>{{ text }}</p>
      <button v-on:click="supBro" class="btn btn-danger">Supprimer</button>
      <button v-on:click="supTxt" class="btn btn-success ml-2">
        Supprimer txt
      </button>
      <button v-on:click="ChangeTitre" class="btn btn-info ml-2">
        Changer le titre
      </button>
      <button v-on:click="ChangeHeaderTitle" class="btn btn-dark ml-2">
        Changer le header
      </button>
    </ul>
    <!-- comportement par default -->
    <slot>wait</slot>
    <slot name="info"></slot>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  name: "Liste",
  data() {
    return {
      fruits: ["orange", "pomme", "fraise", "poire"],
    };
  },
  /*props: {
    name: {
      type: String, //Number//Object//function
      required: true, // sans la prise en compte au niveau parent
    }, //ca fait bugé
  },*/
  methods: {
    reversing: function() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    supBro: function() {
      this.myArr.pop();
    },
    supTxt: function() {
      this.text = "";
    },
    ChangeTitre: function() {
      this.$emit("ChangeTitreEv", "mon new titire");
    },
    ChangeHeaderTitle: function() {
      bus.$emit("Change-title-e", "Nouveau titre emis d'en bas");
    },
  },
  props: ["myArr", "text"],
};
</script>

<style scoped src="./ListeStyle.css"></style>
