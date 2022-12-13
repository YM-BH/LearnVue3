<template>
  <div class="location">
    <div class="city" @click="cityClick">北京</div>
    <div class="position">
      <span>我的位置</span>
      <img src="@/assets/images/home/icon_location.png">
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function cityClick() {
  router.push("/city")
}
</script>

<style lang="less" scoped>
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
</style>