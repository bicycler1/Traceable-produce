<template>
  <div class="banner">
    <div>
      企业农业管理系统
    </div>
    <div>
     <span @click="enterpriseChoose(1)">
      <i class="fa fa-address-card fa-2x" ></i>
      基本信息
    </span>
    <span @click="enterpriseChoose(2)">
      <i class="fa fa-address-card-o fa-2x" ></i>
      农资准入
    </span>
    <span @click="enterpriseChoose(3)">
      <i class="fa fa-shopping-cart fa-2x" ></i>
      采购管理
    </span>
    <span @click="enterpriseChoose(4)">
      <i class="fa fa-tree fa-2x" ></i>
      生产管理
    </span>
    <span @click="enterpriseChoose(5)">
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
  import store from '@/store'
  export default {
    name: 'EnterpriseBanner',
    store,
    data () {
      return {
        enterpriseName: "",
        bannerChoose:{
          info1:{
            title: "基本信息",
            info: ['企业信息','仓库管理','种植基地管理','农产品信息管理']
          },
          info2:{
            title: "农资准入",
            info: ['种苗准入','农药准入','化肥准入']
          },
          info3:{
            title: "采购管理",
            info: ['种苗采购','农药采购','化肥采购']
          },
          info4:{
            title: "生产管理",
            info: ['种植批次管理','农事操作','农药使用信息','化肥使用信息']
          },
          info5:{
            title: "销售物流",
            info: ['销售出库管理','销售物流管理']
          },
        }
      }
    },
    methods:{
      enterpriseChoose: function (id) {
        var info;
        switch (id) {
          case 1:
            info = this.bannerChoose.info1;
            break;
          case 2:
            info = this.bannerChoose.info2;
            break;
          case 3:
            info = this.bannerChoose.info3;
            break;
          case 4:
            info = this.bannerChoose.info4;
            break;
          case 5:
            info = this.bannerChoose.info5;
            break;
          default: 
            info = this.bannerChoose.info1;
            break;
        }
        store.commit('changeEnterpriseLeft',info);
        this.$emit('refreshList');
      }
    },
    mounted: function () {
      this.enterpriseName = store.state.loginData.name;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

