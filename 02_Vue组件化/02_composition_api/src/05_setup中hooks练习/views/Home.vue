<template>
  <div>
    <h2>Home</h2>
    <button @click="homePopular">home-流行</button>
    <button @click="homeHot">home-热榜</button>
  </div>
</template>

<script>
import useTitle from '../hooks/useTitle';

  export default {
    setup() {
      const title = useTitle('home')
      
      function homePopular() {
        // useTitle('home-popular')
        title.value = 'home-popular'
      }

      function homeHot() {
        // useTitle('home-hot')
        title.value = 'home-hot'
      }

      return {
        homePopular,
        homeHot
      }

    }
  }

</script>

<style scoped>
</style>