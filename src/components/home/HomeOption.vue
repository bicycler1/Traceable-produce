<template>
  <div class="home-option">
    <div>
     <img :src="url">
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
}
</style>

<script>
  export default {
    name: 'HomeOption',
    props: {
      imgContent: String,
      content: String
    },
    data() {
      return{
        url: ""
      }
    },
    methods:{
      srcChange(){
        this.url="data:image/png;base64,"+this.imgContent;
      }
    },
    mounted() {
      this.srcChange();
    }
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

