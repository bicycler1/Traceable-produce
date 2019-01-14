<template>
  <div class="home-option">
    <div>
     <img :src="'data:image/png;base64,'+this.imgContent">
  </div>
  <div>
    {{content}}  
  </div>
</div>
</template>

<style scoped>
.home-option{
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
  transition: background-color 1s ease-in-out;
}
.home-option:hover{
  box-shadow: 0px 0px 16px #222;
  background-color: #8bbbde;
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

