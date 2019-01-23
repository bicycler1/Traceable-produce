<template>
  <div class="banner">
    <div>
      企业农业管理系统
    </div>
    <div>
     <span>
      <i class="fa fa-address-card fa-2x" ></i>
      基本信息
    </span>
    <span>
      <i class="fa fa-address-card-o fa-2x" ></i>
      农资准入
    </span>
    <span>
      <i class="fa fa-shopping-cart fa-2x" ></i>
      采购管理
    </span>
    <span>
      <i class="fa fa-tree fa-2x" ></i>
      生产管理
    </span>
    <span>
      <i class="fa fa-truck fa-2x" ></i>
      销售物流
    </span>
  </div>
  <div>
    欢迎您，{{enterpriseName}}
  </div>
</div>
</template>

<style scoped>
.banner{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url(../../assets/enterpriseImgs/topbg.jpg) center center no-repeat; 
  width: 100%;
  height: 80px;
  background-size: 100% 100%;
  color: #fff;
}
.banner>div:nth-child(1){
    font-size: 2.3rem;
}
.banner>div:nth-child(2){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.banner>div:nth-child(2)>span{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 6px;
    height: 100%;
    cursor: pointer;
}
.banner>div:nth-child(2)>span:hover{
  background-color: #3c8dbc;
}
.banner>div:nth-child(2) i{
  margin-bottom: 6px;
}
</style>

<script>
  export default {
    name: 'EnterpriseBanner',
    data () {
      return {
        enterpriseName: "智诚乐创"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

