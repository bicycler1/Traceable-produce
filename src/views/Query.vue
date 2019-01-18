<template>
  <div>
    <div class="query-banner">
      <QueryBanner></QueryBanner>
    </div>
    <div class="query-background">
      <img src="../assets/QueryImgs/background.jpg" alt="">
    </div>
  </div>
</template>

<style scoped>
.query-banner{
  position: relative;
  top: 0;
  height: 100px;
}
.query-background{
  position: relative;
}
</style>

<script> 
  import QueryBanner from '@/components/query/banner.vue'
  export default {
    components:{
      QueryBanner
    },
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>
