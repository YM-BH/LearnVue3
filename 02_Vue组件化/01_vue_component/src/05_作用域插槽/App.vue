<template>
  <div>
    <tab-control 
      :titles="['衣服', '裤子', '鞋子']" 
      @item-click="itemClick"
    >
    </tab-control>
    <h2>{{ titles[currentIndex] }}</h2>

    <tab-control 
      :titles="['衣服', '裤子', '鞋子']" 
      @item-click="itemClick"
    >
      <template #default="props">
        <button>{{ props.title }}</button>
      </template>
    </tab-control>
  </div>
</template>

<script>
  import TabControl from './TabControl.vue'
  export default {
    data() {
      return {
        titles: ['衣服列表', '裤子列表', '鞋子列表'],
        currentIndex: 0
      }
    },
    components: {
      TabControl
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
</style>