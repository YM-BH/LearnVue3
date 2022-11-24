<template>
  <div class="inner">
    <div class="inner-info">
      <img :src="itemData.picture_url">
      <div>{{ info.message }}</div>
      <div class="name">{{ itemData.name }}</div>
      <div>{{ itemData.price_format }}/晚</div>
      <div :style="style">{{ itemData.bottom_info.content  }}</div>
    </div>
  </div>
</template>

<script setup>

import { computed } from 'vue'

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const info = computed(() => {
  return {
    message: props.itemData.verify_info.messages.join(" ")
  }
})

const style = computed(() => {
  return {
    color: props.itemData.bottom_info.content_color,
    fontSize: props.itemData.bottom_info.font_size
  }
})

</script>

<style scoped>
.inner {
  width: 33.33333333%;
}

.inner-info {
  margin: 0 8px 12px;
}

.inner img {
  width: 100%;
  border-radius: 3px;
}

.inner .name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>