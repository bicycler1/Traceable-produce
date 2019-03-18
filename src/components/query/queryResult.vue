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
        <table>
          <tr class="table-header">
            <td>
              溯源编号
            </td>
            <td>
              种子编号
            </td>
            <td>
              种植基地
            </td>
            <td>
              农药使用
            </td>
            <td>
              化肥使用
            </td>
            <td>
              加工包装
            </td>
            <td>
              物流信息
            </td>
          </tr>
          <tr>
            <td v-for="(value,key,id) in queryResult"
                :key="id">
              {{value}}
            </td>
          </tr>
        </table>
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
    width: 100%;
    padding: 9px;
    background: #bbb;
  }
  .query-result-content>table{
    width: 100%;
    color: #fff;
  }
  .table-header{
    font-size: 1.2rem;
  }
  .table-header>td:hover{
    background: #21a58f;
  }
  .query-result-content>table td{
    border: 1px solid #ddd;
    padding: 6px;
    text-align: center;
  }
  .table-header>td{
    padding: 12px !important;
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
