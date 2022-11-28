<template>
  <div class="app">
    <h2>App</h2>
    <router-link to="/home" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link to="/user/123">用户123</router-link>
    <router-link to="/user/333">用户333</router-link>
    <button @click="go2Home">首页</button>
    <button @click="go2About">关于</button>
    <router-link to="/order">订单</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
  function go2Home() {
    router.push("/home")
  }

  function go2About() {
    router.push({
      path: "/about",
      query: {
        name: "abc",
        age: 29
      }
    })
  }
</script>

<style scoped>
.router-link-active {
  color: red;
}
</style>
