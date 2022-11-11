<template>
  <h2>{{ message }}</h2>
  <home></home>
</template>

<script>
  import Home from './Home.vue'
  import eventBus from './utils/eventBus';
  export default {
    data() {
      return {
        message: "Hello"
      }
    },
    components: {
      Home
    },
    created() {
      eventBus.on("changeMessage", (name, age) => {
        this.message = `name is ${name}, age is ${age}`
      })
    }
  }

</script>

<style scoped>
</style>