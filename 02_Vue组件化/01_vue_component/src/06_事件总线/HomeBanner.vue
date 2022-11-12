<template>
  <div>
    <button @click="changeMessage">改变文本</button>
  </div>
</template>

<script>
  import eventBus from './utils/eventBus.js'
  export default {
    methods: {
      changeMessage() {
        eventBus.emit("changeMessage", "KiKi", 18)
        eventBus.emit("delete")
      }
    }
  }
</script>

<style scoped>
</style>