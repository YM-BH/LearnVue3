<template>
  <h2>{{ message }}</h2>
  <button @click="message = 'Hello React'">修改消息</button>
  <h2>{{ info.name }} - {{ info.age }}</h2>
  <button @click="info.friends.name = 'james'">修改消息</button>
</template>

<script>
import { reactive, ref, watch } from 'vue';

  export default {
    setup() {
      const message = ref("Hello Vue")

      const info = reactive({
        name: "steve",
        age: 30,
        friends: {
          name: "kobe"
        }
      })

      // 监听 message 修改
      watch(message, (newValue, oldValue) => {
        console.log(newValue, oldValue)
      })

      watch(() => ({...info}), (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }, {
        immediate: true,
        deep: true
      })

      return {
        message,
        info
      }
    }
  }
</script>

<style scoped>

</style>