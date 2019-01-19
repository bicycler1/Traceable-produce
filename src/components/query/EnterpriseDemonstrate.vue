<template>
  <div class="enterprise">
    <div class="drop-down">
      <div>
        {{enterpriseName}}
      </div>
      <div>
        {{enterpriseDescribe}}
      </div>
    </div>
    <img :src="imgChoose()" alt="" class="enterprise-img"/>
    <div>
      {{enterpriseName}}
    </div>
  </div>
</template>

<style scoped>
.enterprise{
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  color: #fff;
}
  .drop-down{
    position: absolute;
    top: -100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background: rgba(88,88,88,0.8);
    z-index: 1;
    transition: all 1s ease-in-out;
  }
  .enterprise-img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .enterprise>div:last-child{
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: rgba(99,99,99,0.6);
    border-radius: 16px 16px 0 0;
    line-height: 1.5;
    z-index: 0;
  }
  .enterprise:hover .drop-down{
    top: 0;
  }

</style>

<script>
  export default {
    name: 'EnterpriseDemonstrate',
    props:{
      enterpriseName: String,
      enterpriseDescribe: String,
      enterpriseImg: String
    },
    data() {
      return{
        imgUrl1: require('../../assets/QueryImgs/e1.jpg'),
        imgUrl2: require('../../assets/QueryImgs/e2.jpg')
      }
    },
    methods: {

      imgChoose: function () {
        switch (parseInt(this.enterpriseImg)) {
          case 1:
            return(this.imgUrl1);
            break;
          case 2:
            return(this.imgUrl2);
            break;
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

