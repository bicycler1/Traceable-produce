<template>
  <div id="app">
    <div class="home-background"></div>
    <HomeOption></HomeOption>
  </div>
</template>

<style scoped>
  .home-background{
    background: url(../../public/favicon.ico) center center 100% 100%;
  }
</style>

<script>
import HomeOption from  '@/components/home/HomeOption.vue'

export default {
  component: {
    HomeOption
  }
}
</script>
