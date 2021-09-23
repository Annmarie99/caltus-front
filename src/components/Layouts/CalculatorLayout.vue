<template>
  <div class="flex w-full m-0 h-full bg-dark">
    <div class="w-1/4 sidebar bg-dark p-3 h-full">
      <cal-sidebar :menuItems="calMenuItems" />
    </div>
    <div class="flex-1 p-3 pl-0 m-0">
      <slot />
    </div>
  </div>
</template>

<script>
import CalSidebar from "../calcualtor/CalSidebar.vue";

export default {
  components: { CalSidebar },
  data() {
    return {
      calMenuItems: [
        {
          id: 1,
          name: "APY Calculator",
          path: "/apy-cal",
        },
        {
          id: 2,
          name: "Percentage Cahnge",
          path: "/percent-cal",
        },
        {
          id: 3,
          name: "Fee Calculator",
          path: "/fee-cal",
        },
        {
          id: 4,
          name: "Average Down Calculator",
          path: "/average-cal",
        },
        {
          id: 5,
          name: "Liquidation Calculator",
          path: "/liquidation-cal",
        },
        {
          id: 6,
          name: "PNL Calculator",
          path: "/pnl-cal",
        },

        {
          id: 7,
          name: "Trade Compound Calculator",
          path: "/trade-cal",
        },

        {
          id: 8,
          name: "Leverged Movement Calculator",
          path: "leverged-cal",
        },
      ],
    };
  },
};
</script>
