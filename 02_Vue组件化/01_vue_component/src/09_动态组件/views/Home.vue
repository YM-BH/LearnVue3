<template>
  <div>
    <h2 @click="homeClick">Home组件 - {{ name }}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: "LBJ"
      }
    },
    emits: ["home"],
    methods: {
      homeClick() {
        console.log("homeClick", "home")
      }
    }
  }
</script>

<style scoped>
</style>