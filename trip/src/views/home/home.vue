<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/images/home/banner.webp">
    </div>
    <home-location></home-location>
    <home-date></home-date>
    <home-search></home-search>
    <home-categories></home-categories>
    <home-content></home-content>
    <button @click="loadMoreData">加载更多</button>
  </div>
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue'
import HomeLocation from './components/home-location.vue'
import HomeDate from './components/home-date.vue'
import HomeSearch from './components/home-search.vue'
import HomeCategories from './components/home-categories.vue'
import HomeContent from './components/home-content.vue'

import useHomeStore from '@/stores/modules/home'

const homeStore = useHomeStore()

homeStore.getHotSuggestsData()
homeStore.getHomeCategoriesData()
homeStore.getHouseList()
const loadMoreData = () => {
  homeStore.getHouseList()
};

</script>

<style lang="less" scoped>

.home {
  padding-bottom: 60px;

  .banner {
    img {
      width: 100%;
    }
  }
}

</style>