<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/images/home/banner.webp">
    </div>
    <home-location></home-location>
    <home-date></home-date>
  </div>
</template>

<script setup>
import HomeNavBar from './components/home-nav-bar.vue'
import HomeLocation from './components/home-location.vue'
import HomeDate from './components/home-date.vue'

</script>

<style lang="less" scoped>

.home {
  .banner {
    img {
      width: 100%;
    }
  }
}

</style>