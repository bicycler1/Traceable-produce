<template>
  <div class="block">
    <div class="banner">
      <div class="banner-left">
        <i :class="className"></i>
        {{bannerContent}}
      </div>
    </div>
    <div class="content">
      <div>
        <div v-for="(item,index) in content"
        :key="index"
        class="each-content"
        >
        <span>[{{item.time}}]</span>
        <span>{{item.content}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.block{
  position: relative;
  width: 100%;
  height: 100%;
  background: #ddd;
}
.banner{
  position: relative;
  background-color: #f3f3f3;
  height: 50px;
  border-top: 3px solid #62d800; 
  font-size: 1.2rem;
  color: #666;
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
.each-content{
  margin: 26px;
  padding-bottom: 16px;
  border-bottom: 2px dashed #999;
}
.each-content>span:nth-child(1){
  margin-right: 10px;
  color: #666;
}
</style>

<script>
  export default {
    name: 'BlockRight',
    props: {
      className: String,
      bannerContent: String,
      content: Array
    }, 
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

