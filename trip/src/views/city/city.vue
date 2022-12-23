<template>
  <div class="city">
    <div class="top">
      <van-search
      v-model="searchValue"
      placeholder="城市/区域"
      shape="round" show-action
      @cancel="cancelBtnClick"
    />
      <van-tabs
        v-model:active="activeTab"
        color="orange"
      >
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <city-group v-show="activeTab === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';
import { computed } from '@vue/reactivity';

import CityGroup from './components/city-group.vue'

// 搜索内容
const searchValue = ref('')

const router = useRouter()

function cancelBtnClick() {
  router.back()
}

// 城市数据
const cityStore = useCityStore()

cityStore.getAllCitiesData()

const { allCities } = storeToRefs(cityStore)

// 当前选中
const activeTab = ref()

// const currentGroup = computed(() => allCities.value[activeTab.value])

</script>

<style lang="less" scoped>
.city {
  // --van-search-left-icon-color: orange;
  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    // 局部滚动
    height: calc(100vh - 98px);
    overflow-y: auto;
  }

}
</style>