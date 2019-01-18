<template>
  <div class="enterprise">
    <div>
      {{enterpriseName}}
    </div>
    <div>
      {{enterpriseDescribe}}
    </div>
  </div>
</template>

<style scoped>
.enterprise{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>

<script>
  export default {
    name: 'EnterpriseDemonstrate',  
    props:{
      enterpriseName: String,
      enterpriseDescribe: String
    },
    data(){
      return{

      }
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

