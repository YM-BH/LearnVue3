<template>
  <div class="tab-control">
    <div 
      class="tab-control-item"
      :class="{active: index === currentIndex}"
      v-for="(title, index) in titles"
      @click="titleClick(index)"

    >
      <slot :title="title">
        <span>{{ title }}</span>
      </slot>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      titles: {
        type: Array
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    emits: ['itemClick'],
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('itemClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-weight: 800;
    text-align: center;
  }
  .tab-control-item {
    flex: 1;
  }

  .tab-control-item.active {
    color: red;
  }

  .tab-control-item.active span {
    padding: 8px;
    border-bottom: solid red 2px;
  }
</style>