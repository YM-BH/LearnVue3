<template>
  <div class="home">
    <h2>Home</h2>
    <router-link to="/home/recommend">推荐</router-link>
    <router-link to="/home/ranking">排行</router-link>
    <router-view></router-view>
    <button @click="logoutBtnClick">退出登录</button>
  </div>
</template>

<script setup>

  function logoutBtnClick() {
    localStorage.removeItem("token")
  }
</script>

<style scoped>
</style>