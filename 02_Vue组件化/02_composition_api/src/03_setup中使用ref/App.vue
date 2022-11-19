<template>
  <div>
    <h2 ref="titleRef">标题</h2>
    <button ref="btnRef" @click="getEl">获取元素</button>
    <show-info ref="showInfoRef"></show-info>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import ShowInfo from './ShowInfo.vue'
  export default {
    components: {
      ShowInfo
    },
    setup() {
      const titleRef = ref()
      const btnRef = ref()
      const showInfoRef = ref()

      const getEl = () => {
        console.log(titleRef.value)
        console.log(btnRef.value)
        console.log(showInfoRef.value)

        showInfoRef.value.foo()
      }

      onMounted(() => {

        console.log(titleRef.value)
        console.log(btnRef.value)
        console.log(showInfoRef.value)
        showInfoRef.value.foo()
      })

      return {
        titleRef,
        btnRef,
        getEl,
        showInfoRef
      }
    }
  }
</script>

<style scoped>
</style>