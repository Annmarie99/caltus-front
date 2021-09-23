<template>
  <div>
    <navbar v-if="!isHome" />
    <slot />
  </div>
</template>

<script>
import Navbar from "./Layouts/Navbar.vue";

export default {
  components: { Navbar },
  name: "MainLayout",
  computed: {
    isHome() {
      return this.$route.path === "/" || this.$route.path === "/signup";
    },
  },
};
</script>

<style>
.sidebar {
  height: 100vh;
}
</style>
