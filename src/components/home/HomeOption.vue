<template>
  <div class="home-option">
    <div>
     <img :src="'data:image/png;base64,'+this.imgContent">
  </div>
  <div>
    {{content}}  
  </div>
  <div>
    
  </div>
</div>
</template>

<style scoped>
.home-option{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 260px;
  background-color: #288add;
  border-radius: 16px;
  margin: 16px;
  color: #fff;
  cursor: pointer;
  transition: all .6s ease-in-out;
}
.home-option:hover{
  box-shadow: 0px 0px 16px #222;
  background-color: #8bbbde;
}
.home-option>div:nth-child(3){
  position: absolute;
  bottom: 0;
  width: 0;
  height: 32px;
  transition: all .6s ease;
}
.home-option:hover>div:nth-child(3){
  width: 200px;
  border-radius: 0 0 16px 16px;
  border-bottom: 6px solid #6fc;
}
</style>

<script>
  export default {
    name: 'HomeOption',
    props: {
      imgContent: String,
      content: String
    }  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

