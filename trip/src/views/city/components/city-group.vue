<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hot-city">
        <template v-for="(city, index) in groupData.hotCities" :key="index">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, indey) in groupData.cities" :key="indey">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indez) in group.cities" :key="indez">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>

import { defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city';

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(() => {
  const list = props.groupData.cities.map(item => {
    return item.group
  })
  list.unshift('热门')
  return list
})

const cityStore = useCityStore()
const router = useRouter()
// 城市点击事件
function cityClick(city) {
  // console.log(city.cityName)
  // 将城市保存到 pinia
  cityStore.currentCity = city
  router.back()
}

</script>

<style lang="less" scoped>
.city-group {
  .hot-city {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    .city {
      height: 30px;
      width: 100px;
      border-radius: 15px;
      background-color: orange;
      text-align: center;
      line-height: 30px;
      margin-right: 10px;
      margin-top: 10px;
    }
  }
}
</style>