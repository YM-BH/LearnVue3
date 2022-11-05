<template>
  <h2 class="title">{{ message }}</h2>
  <home></home>
</template>

<script>
import Home from './Home.vue'
export default {
  data() {
    return {
      message: "我是App组件"
    }
  },
  components: {
    Home
  }
}
</script>

<style>
.title {
  color: red;
}
</style>