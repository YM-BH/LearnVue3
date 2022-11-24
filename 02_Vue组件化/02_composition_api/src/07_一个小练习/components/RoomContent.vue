<template>
  <div class="room-content">
    <template v-for="item in list" :key="item.id">
      <room-item :itemData="item"></room-item>
    </template>
  </div>
</template>

<script setup>
  import RoomItem from './RoomItem.vue'
  defineProps({
    list: {
      type: Array,
      default: () => ({})
    }
  })

</script>

<style scoped>
  .room-content {
    display: flex;
    flex-wrap: wrap;
    margin: 20px -8px;
  }

</style>