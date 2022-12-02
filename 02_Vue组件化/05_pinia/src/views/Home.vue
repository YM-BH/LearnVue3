<template>
  <div class="home">
    <h2>当前计数：{{ counter.count }}</h2>
  </div>
</template>

<script setup>
  import useCounter from '@/stores/counter';

  const counter = useCounter()

</script>

<style scoped>
</style>