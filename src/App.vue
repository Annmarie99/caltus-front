<template>
  <div>
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue'


export default {
  components: { MainLayout },
  name : "App",
  
}
</script>
