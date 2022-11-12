<template>
  <h2>{{ message }}</h2>
  <home></home>
  <about v-if="isShowAbout"></about>
  <button @click="deleteAbout">移除About组件</button>
</template>

<script>
  import Home from './Home.vue'
  import About from './About.vue'
  import eventBus from './utils/eventBus';
  export default {
    data() {
      return {
        message: "Hello",
        isShowAbout: true
      }
    },
    methods: {
      deleteAbout() {
        this.isShowAbout = false
      }
    },
    components: {
      Home,
      About
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