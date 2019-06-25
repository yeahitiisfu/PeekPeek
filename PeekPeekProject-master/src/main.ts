import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollmagic from 'vue-scrollmagic';


Vue.config.productionTip = false;

Vue.use(VueScrollmagic, {
    vertical: false,
    globalSceneOptions: {},
    loglevel: 2,
    refreshInterval: 100
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
