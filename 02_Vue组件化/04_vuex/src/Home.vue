<template>
  <div class="home">
    <h2>Home 当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <h2>name - {{ name }}</h2>
    <button @click="changeName">修改name</button>
  </div>
</template>

<script setup>
  import { toRefs } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  function increment() {
    store.commit("increment")
  }

  const { name } = toRefs(store.state)

</script>

<style>
</style>