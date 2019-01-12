<template>
  <div id="app">
    <Home>
    </Home>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import Home from  '@/views/Home.vue'
export  default {
  component: {
    Home
  }
}

/* import router from './router'
export default {
  router,
  mounted: function () {
    this.$router.push([{path: '/'}])
  }
} */
</script>
