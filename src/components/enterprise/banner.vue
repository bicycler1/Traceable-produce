<template>
  <div class="banner">
    <div>
      企业农业管理系统
    </div>
    <div>
     <span>
      <i class="fa fa-address-card-o" ></i>
      基本信息
    </span>
    <span>
      <i class="fa fa-address-card-o" ></i>
      基本信息
    </span>
    <span>
      <i class="fa fa-address-card-o" ></i>
      基本信息
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
}
.banner>div:nth-child(2)>span{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

<script>
  export default {
    name: 'EnterpriseBanner',
    data () {
      return {
        enterpriseName: "ahsdka"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

