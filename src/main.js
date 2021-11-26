import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueApexCharts from "vue-apexcharts";

// import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8080/api";
import GAuth from "vue-google-oauth2"; //***login */
// import axios from "axios";
// import { turn } from "core-js/core/array";
const gauthOption = {
    clientId: "1043211048954-6i0k5s823jsdltm3s8hq7mdfa562psea.apps.googleusercontent.com",
    scope: "profile email",
    prompt: "consent",
    fetch_basic_profile: true,
};
Vue.use(GAuth, gauthOption); /***** */

Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");