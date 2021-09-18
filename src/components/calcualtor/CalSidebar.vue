<template>
<b-list-group >
    <b-list-group-item v-for="menu in menuItems" :key="menu.id" @click="$router.push(menu.path)" >{{menu.name}}</b-list-group-item>
</b-list-group>
</template>

<script>
export default {
name:"CalSidebar",
props: ["menuItems"]
}
</script>
