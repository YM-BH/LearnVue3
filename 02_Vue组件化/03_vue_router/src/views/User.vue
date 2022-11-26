<template>
  <div class="user">
    <h2>User - {{ $route.params.id }}</h2>
  </div>
</template>

<script setup>
  import { onBeforeRouteUpdate, useRoute } from 'vue-router';

  const route = useRoute()
  console.log(route.params.id)

  onBeforeRouteUpdate((to, from) => {
    console.log("to:", to.params.id)
    console.log("from:", from.params.id)
  })

</script>

<style scoped>
</style>