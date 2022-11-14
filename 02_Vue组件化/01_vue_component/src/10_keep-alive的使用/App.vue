<template>
  <div>
    <template v-for="(item, index) in tabs">
      <button 
        :class="{ active: currentIndex === index}" 
        @click="btnClick(index)"
      >
        {{ item }}
      </button>
    </template>
    <keep-alive include="home,about">
      <component :is="tabs[currentIndex]"></component>
    </keep-alive>
  </div>
</template>

<script>
  import About from './views/About.vue'
  import Home from './views/Home.vue'
  import Category from './views/Category.vue'
  export default {
    components: {
      Home,
      About,
      Category
    },
    data() {
      return {
        tabs: ['home', 'about', 'category'],
        currentIndex: 0
      }
    },
    methods: {
      btnClick(index) {
        this.currentIndex = index
      },
      homeClick(payload) {
        console.log(payload)
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>