<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <show-info name="lucy" :age="18"></show-info>
    <show-info @show-message="showMessage"></show-info>
    <show-info ref="showInfoRef"></show-info>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import ShowInfo from './ShowInfo.vue'

  const message = ref("Hello World")

  function changeMessage() {
    message.value = "Hello Vue"
  }

  function showMessage(payload) {
    console.log(payload)
  }

  const showInfoRef = ref()
  onMounted(() => {
    showInfoRef.value.showInfo()
  })
  
</script>

<style>

</style>
