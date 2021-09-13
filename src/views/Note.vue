<template>
  <div class="row">
      <div class="col-3 sidebar bg-black px-0"> <note-sidebar/></div>
      <div class="col-9">
        <p>Hello, note !</p>
      </div>
  </div>
</template>

<script>
import NoteSidebar from '../components/Layouts/NoteSidebar.vue'
export default {
  components: { NoteSidebar },
  name : "Note"
}
</script>
