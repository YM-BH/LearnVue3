<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr>
    <h2>message: {{ account.username }}</h2>
    <button @click="changeMessage">修改信息</button>
  </div>
</template>

<script>
import useCounter from '../hooks/useCounter'
import { reactive } from 'vue'
export default {
  setup() {

    const account = reactive({
      username: "Curry",
      password: "1234"
    })

    const changeMessage = () => {
      account.username = "LBJ"
    }

    const { counter, increment, decrement} = useCounter()
    return {
      // ...useCounter()
      counter,
      increment,
      decrement,
      account,
      changeMessage
    }
  }
}
</script>

<style>

</style>
