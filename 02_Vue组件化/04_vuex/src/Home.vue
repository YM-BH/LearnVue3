<template>
  <div class="home">
    <h2>Home 当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <h2>name - {{ name }}</h2>
    
    <h2>totalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>
    <h2>findFriend: {{ $store.getters.findFriendById(111) }}</h2>
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