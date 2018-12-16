import Vue from "vue";
import App from "./App.vue";
import SimpleIcons from "../../src";

Vue.use(SimpleIcons);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
