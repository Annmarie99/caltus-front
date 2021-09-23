<template>
  <div class="row w-full m-0">
    <div class="col-3 sidebar bg-black px-0">
      <cal-sidebar :menuItems="calMenuItems" />
    </div>
    <div class="col-9 row p-0 m-0">
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

