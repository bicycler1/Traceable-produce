<template>
  <div class="home-option">
    {{content}}
  </div>
</template>

<style scoped>
  .home-option{
    margin: 16px;
  }
</style>

<script>
  export default {
    name: 'HomeOption',
    props: {
      content: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

