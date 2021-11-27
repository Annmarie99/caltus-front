<template>
  <div class="flex w-full pr-4 bg-gray-700	">
    <div
      class="
        sidebar
        px-0
        bg-gradient-to-r
        from-gray-800
        to-gray-900
        border-r-2 border-green-400	
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
        bg-variant="dark"
        text-variant="white"
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
            <b-button variant="danger" block @click="hideModal"
              >Delete</b-button
            >
            <b-button variant="success" block @click="toggleModal"
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
export default {
  components: { NoteSidebar },
  name: "Note",
  data() {
    return {
      modalShow: false,
      notes: [
        {
          id: 1,
          content: "Hello, World",
          edit: false,
        },
        {
          id: 2,
          content: "hello, again!",
          edit: false,
        },
      ],
    };
  },
  methods: {
    newNote() {
      this.notes.push({
        id: this.notes[this.notes.length - 1].id + 1,
        content: "new Note",
        edit: false,
      });
    },
  },
};
</script>
