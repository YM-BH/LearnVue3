<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData">
      <div class="tabbar-item">
        <img :src="getAssetURL(item.image)">
        <span>{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
  import tabbarData from '../../assets/data/local'
  import { getAssetURL } from '../../utils/load_assets'

</script>

<style scoped>
  .tabbar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    border-top: 1px solid #f3f3f3;
  }

  .tabbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
  }

  .tabbar-item img {
    width: 30px;
    margin-bottom: 2px;
  }
</style>