<template>
  <div>
    <button @click="addNum(1)">+1</button>
    <button @click="addNum(5)">+5</button>
    <button @click="addNum(10)">+10</button>
  </div>
</template>

<script>
  export default {
    emits: ["add"],
    methods: {
      addNum(num) {
        this.$emit("add", num)
      }
    }
  }

</script>

<style scoped>


</style>