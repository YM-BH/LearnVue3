<template>
  <div class="city">
    <van-search
      v-model="searchValue"
      placeholder="城市/区域"
      shape="round" show-action
      @cancel="cancelBtnClick"
    />

    <van-tabs
      v-model:active="currentIndex"
      color="orange"
    >
      <van-tab title="标签 1"></van-tab>
      <van-tab title="标签 2"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city'

const searchValue = ref('')

const router = useRouter()

function cancelBtnClick() {
  router.back()
}

const currentIndex = ref(0)

const cityStore = useCityStore()

cityStore.getAllCitiesData()

</script>

<style lang="less" scoped>
.city {
  // --van-search-left-icon-color: orange;
}
</style>