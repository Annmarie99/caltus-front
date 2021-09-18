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
      ],
    };
  },
};
</script>
