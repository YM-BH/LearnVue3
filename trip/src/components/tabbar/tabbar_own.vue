<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData">
      <div 
        class="tabbar-item" 
        :class="{ active: currentIndex === index }" 
        @click="itemClick(index, item)"
      >
        <img v-if="(currentIndex !== index)" :src="getAssetURL(item.image)">
        <img v-else :src="getAssetURL(item.imageActive)">
        <span>{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import tabbarData from '../../assets/data/local'
import { getAssetURL } from '../../utils/load_assets'

const currentIndex = ref(0)

const router = useRouter()

function itemClick(index, item) {
  currentIndex.value = index
  router.push(item.path)
}

</script>

<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-top: 1px solid #f3f3f3;
}

.tabbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
}

.tabbar-item img {
  width: 30px;
  margin-bottom: 2px;
}

.active {
  color: orange;
}
</style>