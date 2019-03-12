<template>
  <div>
    <QueryBanner class="banner"></QueryBanner>
    <div class="query-background">
      <img src="../../assets/QueryImgs/background.jpg" alt="">
    </div>
    <div class="query-result">
      <div v-for="(key,value,id) in "></div>
    </div>
  </div>
</template>

<style scoped>
  .banner{
    position: relative;
  }
  .query-background{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .query-result{
    position: relative;
    display: flex;
    justify-content: center;
    width: 1200px;
    margin: 30px auto;
  }
</style>

<script>
import QueryBanner from '@/components/query/banner'
import store from '@/store'
export default {
  store,
  components: {
    QueryBanner
  },
  data () {
    return {
      queryResult: Object
    }
  },
  mounted: function () {
    this.queryResult = store.state.queryData
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
