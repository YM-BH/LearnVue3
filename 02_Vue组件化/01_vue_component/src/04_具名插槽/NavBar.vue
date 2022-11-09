<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .left {
    width: 80px;
    background-color: aqua;
  }

  .center {
    flex: 1;
    background-color: orangered;
  }

  .right {
    width: 80px;
    background-color: skyblue;
  }

</style>