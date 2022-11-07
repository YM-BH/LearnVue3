<template>
  <app-header></app-header>
  <app-content></app-content>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppContent from './AppContent.vue'
import AppFooter from './AppFooter.vue'
export default {
  data() {
    return {
      message: "我是App组件"
    }
  },
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>

<style scoped>
.title {
  color: red;
}
</style>