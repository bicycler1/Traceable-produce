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
          <i class="fa fa-search"></i>
          溯源查询
        </div>
        <div class="query-qr-input">
          <div class="query-input-left">
            <div class="qr-code">
              <img src="../assets/QueryImgs/qrCode.png"/>
              <div>
                &nbsp;&nbsp;立刻扫码下载<br>
                &nbsp;&nbsp;溯源移动APP
              </div>
            </div>
            <div class="query-input-right">
              adshada
            </div>
          </div>
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #f3f3f3;
  height: 50px;
  border-top: 1px solid #62d800; 
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 16px;
}
.query-input-banner>i{
  margin: 0 6px;
  color: #62d800;
}
.query-qr-input{
  position: relative;
}
.query-input-left{
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  padding: 6px;
}
.qr-code{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.qr-code>img{
  width: 100px;
  height: 100px;
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
