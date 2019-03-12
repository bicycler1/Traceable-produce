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
        <img :src="chooseImg()">
      </div>
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
  padding: 26px 16px;
}
.content>div:nth-child(1){
  position: relative;
  width: 40%;
  border: 5px solid #fff;
}
.content>div:nth-child(2){
  position: absolute;
  top: 26px;
  right: 0;
  width: 60%;
}
.each-content{
  margin: 0 16px 16px 16px;
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
  name: 'Block',
  props: {
    className: String,
    bannerContent: String,
    imgSrc: String,
    content: Array
  },
  data () {
    return {
      img1: require('../../assets/QueryImgs/news1.jpg')
    }
  },
  methods: {
    chooseImg: function () {
      switch (parseInt(this.imgSrc)) {
        case 1:
          return (this.img1)
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
