import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as BABYLON from "@babylonjs/core/Legacy/legacy"; //全部引入
Vue.config.productionTip = false;
Vue.prototype.BABYLON = BABYLON;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
