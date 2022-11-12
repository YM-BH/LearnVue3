<template>
  <div>
    <h2>About组件</h2>
  </div>
</template>

<script>
  import eventBus from './utils/eventBus'
  export default {
    methods: {
      handler() {
        console.log("监听")
      }
    },
    created() {
      eventBus.on("delete", this.handler)
    },
    unmounted() {
      console.log("About组件被移除")
      eventBus.off("delete", this.handler)
    }

  }

</script>

<style scoped>
</style>