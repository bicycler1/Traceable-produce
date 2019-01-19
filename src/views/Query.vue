<template>
  <div>
    <div class="query-banner">
      <QueryBanner></QueryBanner>
    </div>
    <div class="query-background">
      <img src="../assets/QueryImgs/background.jpg" alt="">
    </div>
    <div class="enterprise-row">
      <EnterpriseDemonstrate
        enterpriseName="智慧农业软件平台"
        enterpriseDescribe="智诚乐创"
        enterpriseImg="1"
      ></EnterpriseDemonstrate>
      <EnterpriseDemonstrate
        enterpriseName="智慧农业软件平台"
        enterpriseDescribe="智诚乐创"
        enterpriseImg="2"
      ></EnterpriseDemonstrate>
      <EnterpriseDemonstrate
        enterpriseName="智慧农业软件平台"
        enterpriseDescribe="智诚乐创"
        enterpriseImg="1"
      ></EnterpriseDemonstrate>
      <EnterpriseDemonstrate
        enterpriseName="智慧农业软件平台"
        enterpriseDescribe="智诚乐创"
        enterpriseImg="2"
      ></EnterpriseDemonstrate>
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.enterprise-row{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

<script>
  import QueryBanner from '@/components/query/banner.vue'
  import EnterpriseDemonstrate from '@/components/query/EnterpriseDemonstrate.vue'
  export default {
    components:{
      QueryBanner,
      EnterpriseDemonstrate
    },
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>
