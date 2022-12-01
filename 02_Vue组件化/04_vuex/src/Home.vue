<template>
  <div class="home">
    <h2>Home 当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">+5</button>
    <h2>name - {{ name }}</h2>
    
    <h2>totalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ message }}</h2>
    <h2>findFriend: {{ $store.getters.findFriendById(111) }}</h2>
  </div>
</template>

<script setup>
  import { computed, toRefs } from 'vue'
  import { useStore } from 'vuex'
  import { INCREMENT } from './store/mutation_types'

  const store = useStore()
  function increment() {
    store.commit(INCREMENT, 5)
  }

  const { name } = toRefs(store.state)

  const message = computed(() => store.getters.message)

</script>

<style>
</style>