<template>
  <div>
    <NavbarX v-if="!isHome" />
    <slot />
  </div>
</template>

<script>
import NavbarX from "./Layouts/NavbarX.vue";

export default {
  components: { NavbarX },
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
