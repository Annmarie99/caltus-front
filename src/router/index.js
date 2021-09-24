import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Note from "../views/Note.vue";

import Tracker from "../views/Tracker.vue";
import Dashboard from "../views/Dashboard.vue";
import APYCalculator from "../views/APYCalculator";
import PercentCalculator from "../views/PercentCalculator";
import FeeCalculator from "../views/FeeCalculator.vue";
import Signupform from "../views/Signupform.vue";
import AverageDown from "../views/AverageDown.vue";
import LiquidationCalculator from "../views/LiquidationCalculator.vue";
import PNLCalculator from "../views/PNLCalculator.vue";
import TradeCompoundCalculator from "../views/TradeCompoundCalculator.vue";
import LevergedMovementCalculator from "../views/LevergedMovementCalculator.vue";

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
        name: "Tracker",
        component: Tracker,
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
        path: "/fee-cal",
        name: "FeeCalculator",
        component: FeeCalculator,
    },
    {
        path: "/signup",
        name: "Signupform",
        component: Signupform,
    },
    {
        path: "/average-cal",
        name: "AverageDown",
        component: AverageDown,
    },
    {
        path: "/liquidation-cal",
        name: "LiquidationCalculator",
        component: LiquidationCalculator,
    },
    {
        path: "/pnl-cal",
        name: "PNLCalculator",
        component: PNLCalculator,
    },
    {
        path: "/trade-cal",
        name: "TradeCompoundCalculator",
        component: TradeCompoundCalculator,
    },

    {
        path: "/leverged-cal",
        name: "LevergedMovementCalculator",
        component: LevergedMovementCalculator,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;