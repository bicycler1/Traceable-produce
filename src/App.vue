<template>
  <div id="app">
    <Home>
    </Home>
  </div>
</template>

<style scoped>
#app{
	width: 100%;
	height: 100%;
}
</style>

<script>
import Home from  '@/views/Home.vue'

export  default {
  components: {
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
