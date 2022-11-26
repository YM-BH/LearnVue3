<template>
  <div class="app">
    <h2>App</h2>
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link to="/user/123">用户123</router-link>
    <router-link to="/user/333">用户333</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
  color: red;
}
</style>
