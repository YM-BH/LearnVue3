<template>
  <div class="city">
    <van-search v-model="searchValue" placeholder="城市/区域" shape="round" show-action />
  </div>
</template>

<script setup>
import { ref } from 'vue';


const searchValue = ref('')

</script>

<style lang="less" scoped>
.city {
  // --van-search-left-icon-color: orange;
}
</style>