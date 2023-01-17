<template>
  <div class="home-content">
    <template v-for="(item, index) in houseList">
      <h3>{{ item.data.houseName }}</h3>
    </template>
  </div>
</template>

<script setup>

import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()

const { houseList } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>

</style>