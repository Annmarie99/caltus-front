import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import firebase from "firebase";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueApexCharts from "vue-apexcharts";

import GAuth from "vue-google-oauth2"; //***login */
// import { turn } from "core-js/core/array";
const gauthOption = {
    clientId: "1043211048954-6i0k5s823jsdltm3s8hq7mdfa562psea.apps.googleusercontent.com",
    scope: "profile email",
    prompt: "consent",
    fetch_basic_profile: true,
};

// const config = {
//     apiKey: "AIzaSyDLqTPX6RusN20Vd8pkrnzYK62ZwC3c098",
//     authDomain: "caltus-7dc51.firebaseapp.com",
//     projectId: "caltus-7dc51",
//     storageBucket: "caltus-7dc51.appspot.com",
//     messagingSenderId: "184245836959",
//     appId: "1:184245836959:web:ca00a99263ec4f4034d6aa",
//     measurementId: "G-873NGP2H8N",
// };

//Initialize Firebase
//firebase.initializeApp(config);

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