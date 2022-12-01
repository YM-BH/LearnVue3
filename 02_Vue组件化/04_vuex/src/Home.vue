<template>
  <div class="home">
    <h2>Home 当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">+5</button>
    <button @click="incrementAction">+10</button>
    <h2>name - {{ name }}</h2>
    
    <h2>totalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ message }}</h2>
    <h2>findFriend: {{ $store.getters.findFriendById(111) }}</h2>
    <ul>
      <template v-for="item in $store.state.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
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

  function incrementAction() {
    store.dispatch("incrementAction", 10)
  }

  // 获取数据
  store.dispatch("getTopData")
</script>

<style>
</style>