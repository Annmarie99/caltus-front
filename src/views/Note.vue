<template>
  <div class="flex w-full pr-4 bg-dark">
    <div
      class="
        sidebar
        px-0
        bg-gradient-to-r
        from-gray-800
        to-gray-900
        border-r-2 border-white
      "
    >
      <note-sidebar :notes="notes" />

      <div class="px-28">
        <b-button @click="newNote" pill variant="outline-success"
          ><i class="bi bi-plus-circle"></i
        ></b-button>
      </div>
    </div>

    <div class="flex-1 w-full grid grid-cols-3 gap-4 p-3">
      <b-card
        v-for="note in notes"
        :key="note.id"
        class="cursor-pointer h-48"
        bg-variant="white"
        text-variant="bg-gray-400"
        @click="note.edit = !note.edit"
      >
        <p>{{ note.content }}</p>
        <b-modal
          size="xl"
          v-model="note.edit"
          hide-footer
          hide-header
          body-bg-variant="dark"
        >
          <b-form-textarea
            id="textarea"
            class="bg-dark text-white"
            v-model="note.content"
            rows="20"
            max-rows="20"
          ></b-form-textarea>
          <div class="w-full flex icon space-x-3 justify-end pt-3">
            <b-button variant="danger" @click="deleteNote(note.id_note)" block
              >Delete</b-button
            >
            <b-button
              variant="success"
              @click="saveNote(note.id_note, note.content)"
              block
              >Save</b-button
            >
          </div>
        </b-modal>
      </b-card>
    </div>
  </div>
</template>

<script>
import NoteSidebar from "../components/note/NoteSidebar.vue";
import axios from "axios";
export default {
  components: { NoteSidebar },
  name: "Note",
  data() {
    return {
      modalShow: false,
      notes: [],
    };
  },
  async mounted() {
    console.warn(localStorage.getItem("user_id"));
    this.notepage();
  },
  methods: {
    async newNote() {
      let results = await axios.post("http://localhost:5500/api/notes", {
        id_user: localStorage.getItem("user_id"),
        note_name: "notes",
        content_note: "New Note Page",
        image_note: "",
      });
      console.warn(results);
      this.notepage();
    },
    async notepage() {
      this.notes = [];
      let results = await axios.get("http://localhost:5500/api/notes", {
        params: {
          id_user: localStorage.getItem("user_id"),
        },
      });
      console.warn(results);

      for (let i = 0; i < results.data.data.length; i++) {
        this.notes.push({
          id_note: results.data.data[i].id_note,
          content: results.data.data[i].content_note,
          edit: false,
        });
      }
    },
    async saveNote(id, contact) {
      console.warn(id);
      console.warn(contact);
      let results = await axios.put("http://localhost:5500/api/notes/" + id, {
        params: {
          id_user: localStorage.getItem("user_id"),
          note_name: "notes",
          content_note: contact,
          image_note: "",
        },
      });
      console.warn(results);
      this.notepage();
    },
    async deleteNote(id) {
      console.log("delete " + id);
      let results = await axios.delete(
        "http://localhost:5500/api/notes/" + id,
        {
          params: {
            id_user: localStorage.getItem("user_id"),
          },
        }
      );
      console.warn(results);
      this.notepage();
    },
  },
};
</script>
