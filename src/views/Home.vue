<template>
  <div class="home-background">
    <HomeOption
      content="hahaha"
    ></HomeOption>
  </div>
</template>

<style scoped>
  .home-background{
    width: 100%;
    height: 100%;
    background-color: #000000;
  }
</style>

<script>
import HomeOption from  '@/components/home/HomeOption.vue'

export default {
  components: {
    HomeOption
  }
}
</script>
