<template>
  <div>
    <h2 @click="homeClick">Home组件</h2>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="incrment">+1</button>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        counter: 0
      }
    },
    created() {
      console.log("home created")
    },
    unmounted() {
      console.log("home unmounted")
    },
    activated() {
      console.log("home activated")
    },
    deactivated() {
      console.log("home deactivated")
    },
    methods: {
      incrment() {
        this.counter ++
      }
    }
  }
</script>

<style scoped>
</style>