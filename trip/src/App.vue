
<template>
  <div class="app">
    <router-view></router-view>
    <!-- 根据当前路由，隐藏 TabBar -->
    <tabbar v-show="!route.meta.hideTabBar"></tabbar>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style scoped>

</style>
