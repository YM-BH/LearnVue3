<template>
  <div>
    <button @click="subNum(1)">-1</button>
    <button @click="subNum(5)">-5</button>
    <button @click="subNum(10)">-10</button>
  </div>
</template>

<script>
  export default {
    emits: ["sub"],
    methods: {
      subNum(num) {
        this.$emit("sub", num)
      }
    }
  }

</script>

<style scoped>

</style>