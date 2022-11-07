<template>
  <show-info name="James" :age="38" :height="2.03" :info="{name: '巴拉'}" :level="2"></show-info>
  <show-info :level="34"></show-info>
</template>

<script>
import ShowInfo from './ShowInfo.vue'
export default {
  
  components: {
    ShowInfo
  }

}
</script>

<style scoped>
</style>