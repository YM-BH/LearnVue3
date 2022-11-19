<template>
  <h2>{{ fullname }}</h2>
</template>

<script>
  import { reactive, computed } from 'vue'
  export default {
    setup() {
      const names = reactive({
        firstname: "Steven",
        lastname: "Curry"
      })

      const fullname = computed(() => {
        return names.firstname + " " + names.lastname
      })

      return {
        fullname
      }

    }
  }
</script>

<style scoped>
</style>