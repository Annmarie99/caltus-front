import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Note from "../views/Note.vue";

import Tracker from "../views/Tracker/Tracker.vue";
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
import Learnmore from "../views/Cards/Learnmore.vue";
import CardsApy from "../views/Cards/CardsApy.vue";
import CardsAverage from "../views/Cards/CardsAverage.vue";
import CardsFee from "../views/Cards/CardsFee.vue";
import CardsLever from "../views/Cards/CardsLever.vue";
import CardsLiqui from "../views/Cards/CardsLiqui.vue";
import CardsPercent from "../views/Cards/CardsPercent.vue";
import CardsPNL from "../views/Cards/CardsPNL.vue";
import CardsTrade from "../views/Cards/CardsTrade.vue";

//import Learnmore from '@/components/Learnmore'
//import BlogPost from "../views/BlogPost.vue";

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
        path: "/dash/:id",
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

    {
        path: "/more",
        name: "Learnmore",
        component: Learnmore,
    },

    {
        path: "/cardsapy",
        name: "CardsApy",
        component: CardsApy,
    },

    {
        path: "/cardsAverage",
        name: "CardsAverage",
        component: CardsAverage,
    },

    {
        path: "/cardsfee",
        name: "CardsFee",
        component: CardsFee,
    },

    {
        path: "cardsLever",
        name: "CardsLever",
        component: CardsLever,
    },

    {
        path: "/cardsliqui",
        name: "CardsLiqui",
        component: CardsLiqui,
    },

    {
        path: "/cardspercent",
        name: "CardsPercent",
        component: CardsPercent,
    },

    {
        path: "/cardspnl",
        name: "CardsPNL",
        component: CardsPNL,
    },

    {
        path: "/cardstrade",
        name: "CardsTrade",
        component: CardsTrade,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;