<template>
  <div class="header-top">
    <p>{{ titre }}</p>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  name: "header",
  data() {
    return {
      titre: "mon titre de base",
    };
  },
  beforeCreate() {
    console.log("il va étre crée");
  },
  created() {
    console.log("composant est crée");
    bus.$on("Change-title-e", (data) => {
      this.titre = data;
    });
  },
  beforeMount() {
    console.log("il va étre monté sur le DOM");
  },
  mounted() {
    console.log("il est intégré dans le DOM");
  },
  beforeUpdate() {
    console.log("il va étre MAJ");
  },
  updated() {
    console.log("il a été MAJ");
  },
};
</script>

<style scoped>
.header-top {
  position: fixed;
  top: 0;
  height: 50px;
  background: #333;
  color: #f1f1f1;
  width: 100%;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  z-index: 5;
}
</style>
