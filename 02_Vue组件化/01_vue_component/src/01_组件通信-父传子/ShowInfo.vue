<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>身高：{{ height }}</h2>
  <h3>级别：{{ level }}</h3>
  <span>{{info.name}}</span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Curry"
    },
    age: {
      type: Number,
      default: 33
    },
    height: {
      type: Number,
      default: 1.91
    },
    level: {
      type: Number,
      required: true
    },
    // 属性是对象类型，default是函数，并返回一个对象
    info: {
      type: Object,
      default() {
        return {name: "属性是对象类型的返回"}
      }
    }
  }
}
</script>

<style scoped>

</style>