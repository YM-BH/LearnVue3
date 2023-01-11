<template>
  <div class="home-categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl">
        <span>{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()

const { categories } = storeToRefs(homeStore);

</script>

<style lang="less" scoped>
.home-categories {
  display: flex;
  margin-top: 10px;
  overflow-x: auto;
  padding: 10px;
  // 去掉进度条
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 70px;

    img {
      width: 32px;
      height: 32px;
    }

    span {
      font-size: 12px;
    }
  }
}
</style>