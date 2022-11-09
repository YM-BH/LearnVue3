<template>
  <div class="app">
    <nav-bar>
      <template #left>
        <button>返回</button>
      </template>
      <template #center>
        <strong>搜索框</strong>
      </template>
      <template v-slot:right>
        <a href="#">百度一下</a>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'
  export default {
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>