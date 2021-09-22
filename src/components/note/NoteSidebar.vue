<template>
  <b-list-group class="p-3">
    <b-list-group-item
      variant="success"
      class="cursor-pointer"
      v-for="note in notes"
      :key="note.id"
      >{{ note.content }}</b-list-group-item
    >
  </b-list-group>
</template>

<script>
export default {
  name: "NoteSidebar",
  props: ["notes"],
};
</script>
