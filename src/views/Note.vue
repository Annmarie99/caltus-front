<template>
  <div class="row">
      <div class="col-3 sidebar bg-black px-0">
        <note-sidebar :notes="notes" />
        <div><b-button @click="newNote" variant="outline-primary">New Note</b-button></div>
      </div>
      <div class="col-9 row">
        <div v-for="note in notes" :key="note.id" class="card col-4" @click="note.edit = !note.edit" >
            <p>{{note.content}}</p>
            <b-modal v-model="note.edit">
              <textarea class="h-100 w-100" v-model="note.content"></textarea>
            </b-modal>
        </div>
      </div>
  </div>
</template>

<script>
import NoteSidebar from '../components/note/NoteSidebar.vue'
export default {
  components: { NoteSidebar },
  name : "Note",
  data(){
    return {
      modalShow: false,
      notes: [
        {
          id : 1,
          content : "Hello, World",
          edit : false,
        },
        {
          id : 2,
          content : "hello, again!",
          edit : false
        }
      ]
    }
  },
  methods: {
    newNote(){
      this.notes.push({id:this.notes[this.notes.length -1 ].id + 1, content : "new Note", edit :false})
    }
  }
}
</script>
