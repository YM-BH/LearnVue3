<template>
  <div class="app">
    <room-header :title="highScore.title" :subtitle="highScore.subtitle"></room-header>
    <room-content :list="highScore.list"></room-content>
  </div>
</template>

<script setup>
  import highScore from './data/high_score.json'
  import RoomContent from './components/RoomContent.vue'
  import RoomHeader from './components/RoomHeader.vue'

  console.log(highScore)


</script>

<style scoped>
  .app {
    width: 1032px;
    margin: 0 auto;
  }
</style>