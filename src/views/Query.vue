<template>
  <div>
    <div class="query-banner">
      <QueryBanner></QueryBanner>
    </div>
    <div class="query-background">
      <img src="../assets/QueryImgs/background.jpg" alt="">
    </div>
    <div class="query-input">
      <div>
        <div class="query-input-banner">
        </div>
      </div>
      <div>
        adsads
      </div>
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
.query-input{
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
  height: 300px;
}
.query-input>div:nth-child(1){
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
}
.query-input>div:nth-child(2){
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
}
.query-input-banner{
  background-color: #f3f3f3;
  height: 50px;
  border-top: 1px solid #62d800; 
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
