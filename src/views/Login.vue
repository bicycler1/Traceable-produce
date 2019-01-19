<template>
  <div class="banner">
    <router-link to="/login">
      <img src="../assets/LoginImgs/loginLogo.png" >
    </router-link>
  </div>
</template>

<style scoped>
.banner{
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100px;
  box-shadow: 0 1px 2px #ddd;
  width: 100%;
}
  .banner img{
    width: 560px;
    height: 66px;
    margin-left: 5%;
  }
</style>

<script>

</script>
