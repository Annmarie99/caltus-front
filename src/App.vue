<template>
  <div>
    <main-layout>
      <transition name="slide-right" mode="out-in">
        <router-view />
      </transition>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "./components/MainLayout.vue";
import axios from "axios";

export default {
  components: { MainLayout },
  name: "App",
  mounted() {
    axios.get("http://localhost:5500/note").then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
