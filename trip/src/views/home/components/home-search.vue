<template>
  <div class="home-search">
    <div>关键字/位置/民宿名</div>
    <div class="tags">
      <template v-for="(item, index) in hotSuggests" :key="item.tagText">
        <div class="item">{{ item.tagText.text }}</div>
      </template>
    </div>
    <div class="begin-search">开始搜索</div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()

const { hotSuggests } = storeToRefs(homeStore);

</script>

<style lang="less" scoped>
.home-search {
  margin-top: 30px;
  padding: 0 10px;

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .item {
      // padding: 8px 4px;
      margin-right: 10px;
      margin-top: 10px;
      padding: 4px 8px;
      border-radius: 10px;
      background: orange;
      font-size: 14px;
    }
  }
  .begin-search {
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-weight: 800;
    font-size: 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    // 渐变色
    background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
  }
}
</style>