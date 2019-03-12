<template>
  <div>
    <QueryBanner class="banner"></QueryBanner>
    <div class="query-background">
      <img src="../../assets/QueryImgs/background.jpg" alt="">
    </div>
    <div class="query-result">
      <div class="query-result-header">
        <div>
          溯源查询
        </div>
      </div>
      <div class="query-result-content">
        <div v-for="(value,key,id) in queryResult"
             :key="id">
          {{key}}:{{value}}
        </div>
      </div>
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
    width: 1200px;
    margin: 19px auto;
  }
  .query-result-header{
    position: relative;
    height: 30px;
    width: 100%;
    background: #f3f3f3;
    border-top: 3px solid #62d800;
  }
  .query-result-header>div:nth-child(1){
    position: absolute;
    top: 3px;
    left: 16px;
  }
  .query-result-content{
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    background: #bbb;
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
