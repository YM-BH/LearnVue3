<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" active-color="orange">
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img :src="currentIndex !== index ? getAssetURL(item.image) : getAssetURL(item.imageActive)">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import tabbarData from '../../assets/data/local'
import { getAssetURL } from '../../utils/load_assets'

const currentIndex = ref(0)

</script>

<style scoped>

</style>