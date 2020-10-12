import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Contenu from "./components/Contenu.vue"; maniére globale

// Vue.component("contenu", Contenu); maniére globale

export const bus = new Vue(); //exporté le bus pour changer le titre de header

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

//elle vaut sa
/*
render: function(createElement){
  return createElement(app)
}*/
