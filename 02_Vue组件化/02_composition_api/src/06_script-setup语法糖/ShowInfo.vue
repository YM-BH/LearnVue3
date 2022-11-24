<template>
  <h2>age : {{ age }} - name : {{ name }}</h2>
  <button @click="showMessage">showMessage</button>
</template>

<script setup>

  defineProps({
    age: {
      type: Number,
      default: 22
    },
    name: {
      type: String,
      default: "Cc"
    }
  })

  const emit = defineEmits(['showMessage'])

  function showMessage() {

    emit("showMessage", "showMessageClick")
  }

  defineExpose({
    showInfo
  })

  function showInfo() {
    console.log("showInfo")
  }

</script>

<style scoped>

</style>