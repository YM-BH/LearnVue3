<template>
  <div>
    <h2 ref="title">h2元素</h2>
    <home ref="home"></home>
    <button @click="getRef">获取ref</button>
  </div>
</template>

<script>
  import Home from './Home.vue'
  export default {
    components: {
        Home
    },
    methods: {
      
      getRef() {
        console.log(this.$refs.title)
        console.log(this.$refs.home.$el)
      }
    }
  }
</script>

<style scoped>

</style>