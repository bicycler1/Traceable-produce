<template>
  <div class="block">
    <div class="banner">
      <div class="banner-left">
        <i :class="className"></i>
        {{bannerContent}}
      </div>
      <div class="banner-right">
        更多
        <i class="fa fa-arrow-circle-o-right"></i>
      </div>
    </div>
    <div class="content">
      <div>
        <img src="../../assets/QueryImgs/news1.jpg">
      </div>
      <div>
        <div v-for="(item,index) in content"
      :key="index"
      >
        <span>{{item.content}}</span>
        <span>{{item.time}}</span>
        <div class="block-each-border">
        </div>
      </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.block{
  position: relative;
  margin: 16px auto;
  width: 80%;
  background: #ddd;
}
.banner{
  position: relative;
  background-color: #f3f3f3;
  height: 50px;
  border-top: 3px solid #62d800; 
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 16px;
}
.banner-left{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 100%;
}
i{
  margin: 0 16px;
  color: #62d800;
  font-size: 1.6rem;
}
.banner-right{
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
.content{
  position: relative;
  display: flex;
  align-items: center;
  padding: 9px;
}
.content>div:nth-child(1){
  position: relative;
  width: 40%;
  border: 5px solid #fff;
}
.content>div:nth-child(2){
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
}
.block-each-border{
  border-bottom: 2px dotted #999;
}
</style>

<script>
  export default {
    name: 'Block',
    props: {
      className: String,
      bannerContent: String,
      content: Array
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

