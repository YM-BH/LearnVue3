<template>
  <div>
    <h2>App</h2>
    <button @click="homeClick">home</button>
    <button @click="aboutClick">about</button>
    <component :is="currentCpn"></component>
  </div>
</template>

<script>
  import { ref } from 'vue'
import useTitle from './hooks/useTitle'
  import About from './views/About.vue'
  import Home from './views/Home.vue'
  export default {
    components: {
      Home,
      About
    },
    setup() {
      let currentCpn = ref('home')

      useTitle("App")

      function homeClick() {
        currentCpn.value = 'home'
      }

      function aboutClick() {
        currentCpn.value = 'about'
      }

      return {
        currentCpn,
        homeClick,
        aboutClick
      }
    }
  }
</script>

<style scoped>
</style>