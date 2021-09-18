<template>
<b-list-group >
    <b-list-group-item v-for="note in notes" :key="note.id">{{note.content}}</b-list-group-item>
</b-list-group>
</template>

<script>
export default {
name:"NoteSidebar",
props: ["notes"]
}
</script>
