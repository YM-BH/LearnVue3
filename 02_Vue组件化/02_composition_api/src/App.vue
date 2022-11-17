<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import useCounter from './hooks/useCounter'
export default {
  setup() {

    const { counter, increment, decrement} = useCounter()
    return {
      // ...useCounter()
      counter,
      increment,
      decrement
    }
  }
}
</script>

<style>

</style>
