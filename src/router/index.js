import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Note from "../views/Note.vue";

import Api from "../views/Api.vue";
import Dashboard from "../views/Dashboard.vue";
import APYCalculator from "../views/APYCalculator";
import PercentCalculator from "../views/PercentCalculator";
import Signupform from "../views/Signupform.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/note",
        name: "Note",
        component: Note,
    },
    {
        path: "/tracker",
        name: "Api",
        component: Api,
    },
    {
        path: "/dash",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/apy-cal",
        name: "APYCalculator",
        component: APYCalculator,
    },
    {
        path: "/percent-cal",
        name: "PercentCalculator",
        component: PercentCalculator,
    },
    {
        path: "/signup",
        name: "Signupform",
        component: Signupform,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;