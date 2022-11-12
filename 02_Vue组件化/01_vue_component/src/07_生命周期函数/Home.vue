<template>
  <h2>Home组件</h2>
</template>

<script>
  export default {
    beforeUnmount() {
      console.log("Home - beforeUnmount")
    },
    unmounted() {
      console.log("Home - unmounted")
    }
  }
</script>

<style scoped>
</style>