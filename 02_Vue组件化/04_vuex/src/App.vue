<template>
  <div class="app">
    <h2>App 当前计数：{{ $store.state.counter }}</h2>
    <home />
  </div>
</template>

<script setup>
  import Home from './Home.vue'

</script>

<style>

</style>
