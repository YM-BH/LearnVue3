<template>
  <div class="about">
    <h2>About - {{ $route.query }}</h2>
    <button @click="backBtnClick">返回</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
  function backBtnClick() {
    router.back()
  }
</script>

<style scoped>
</style>