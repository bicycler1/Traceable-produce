<template>
  <div class="banner">
    <router-link to="/query">
      <img src="../../assets/HomeImgs/logo.png" >
    </router-link>
    <div class="banner-option">
      <button>
        dadadad
      </button>
      <button>
        dadadad
      </button>
    </div>
  </div>
</template>

<style scoped>
.banner{
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  box-shadow: 0 0 0 5px #333;
}
.class-option{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.banner-option>button{
  height: 90px;
  width: 60px;
}
</style>

<script>
  export default {
    name: 'QueryBanner',  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

