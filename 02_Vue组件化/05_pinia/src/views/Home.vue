<template>
  <div class="home">
    <h2>当前计数：{{ counterStore.count }}</h2>
    <button @click="changeNum">修改count</button>
    <hr>
    <h2>name is {{ name }}, age is {{ age }}, level is {{ level }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
    <button @click="patchState">批量修改state</button>
    <button @click="replaceState">替换state</button>
    <h2>doubleCounter: {{ counterStore.doubleCounter }}</h2>
    <h2>doubleCounterAddOne: {{ counterStore.doubleCounterAddOne }}</h2>
    <h2>getFriend111: {{ counterStore.getFriendById(111) }}</h2>
    <h2>showInfo: {{ counterStore.showInfo }}</h2>

    <ul>
      <template v-for="item in homeStore.banners"  :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  import useCounter from '@/stores/counter';
  import useUser from '@/stores/user';
  import useHome from '@/stores/home'
  import { storeToRefs } from 'pinia';

  const counterStore = useCounter()

  function changeNum() {
    counterStore.incrementNum(4)
  }

  const userStore = useUser()

  const { name, age, level } = storeToRefs(userStore)

  // 修改 state
  function changeState() {
    userStore.name = 'james'
    userStore.age = 23
    userStore.level = 66
  }
  // 重置 state
  function resetState() {
    userStore.$reset()
  }

  // 批量修改state
  function patchState() {
    userStore.$patch({
      name: 'curry',
      level: 99
    })
  }
  // 替换 state
  function replaceState() {
    userStore.$state ={
      name: 'Lilu',
      age: 12,
      level: 23
    }
  }

  const homeStore = useHome()
  homeStore.getHomeData()
</script>

<style scoped>
</style>