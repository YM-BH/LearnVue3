<template>
  <div class="location">
    <div class="city" @click="cityClick">{{ cityStore.currentCity.cityName }}</div>
    <div class="position">
      <span>我的位置</span>
      <img src="@/assets/images/home/icon_location.png">
    </div>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { useRouter } from 'vue-router';

const router = useRouter()

function cityClick() {
  router.push("/city")
}

const cityStore = useCityStore()
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