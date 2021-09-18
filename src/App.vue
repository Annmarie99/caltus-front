<template>
  <div>
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue'
import axios from 'axios'

export default {

  components: { MainLayout },
  name : "App",
  mounted(){
    axios.get('http://localhost:5500/note').then((res)=>{
      console.log(res.data);
    })
  }
}
</script>
