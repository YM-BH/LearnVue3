<template>
  <div class="login">
    <h2>登录页面</h2>
    <button @click="loginBtnClick">登录</button>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
  function loginBtnClick() {
    localStorage.setItem("token", "hahaha")

    // 跳转到 Order 页面
    router.push("/order")
    
  }
</script>

<style scoped>
</style>