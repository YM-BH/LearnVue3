<template>
  <h2>{{ message }}</h2>
  <button @click="message = 'Hello React'">该文本</button>
  <home v-if="isShow"></home>
  <button @click="isShow = !isShow">显示</button>
</template>

<script>
  import Home from './Home.vue'
  export default {
    components: {
      Home
    },
    data() {
      return {
        message: "Hello Vue",
        isShow: true
      }
    },
    beforeCreate() {
      console.log(" App - beforeCreate")
    },
    created() {
      console.log(" App - created")
    },
    beforeMount() {
      console.log(" App - beforeMount")
    },
    mounted() {
      console.log(" App - mounted")
    },
    beforeUpdate() {
      console.log(" App - beforeUpdate")
    },
    updated() {
      console.log(" App - updated")
    },
    beforeUnmount() {
      console.log(" App - beforeUnmount")
    },
    unmounted() {
      console.log(" App - unmounted")
    }
  }
</script>

<style scoped>
</style>