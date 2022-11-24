<template>
  <div class="room-header">
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  })
</script>

<style scoped>
  .title {
    font-size: 18px;
    color: #333;
    margin-top: 10px;
  }

  .subtitle {
    font-size: 12px;
    color: #555;
    margin-top: 15px;
  }
</style>