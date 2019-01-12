<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<style scoped>

</style>

<script>
  import HomeOption form '@/'
  import router from './router';
  export default {
    router,
    mounted() {
      this.$router.push([{path:'/'}]);
    }
  }
</script>