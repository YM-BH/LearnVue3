<template>
  <div class="home">
    <nav-bar></nav-bar>
    <div class="banner">
      <img src="@/assets/images/home/banner.webp">
    </div>
    <div class="location">
      <div class="city">北京</div>
      <div class="position">
        <span>我的位置</span>
        <img src="@/assets/images/home/icon_location.png">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>

.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 44px;
    .city {
      flex: 1;
    }
    .position {
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }
}

</style>