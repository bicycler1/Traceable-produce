<template>
  <div>
    <div class="home-background">
    </div>
    <div class="home-logo">
      <img src="../assets/HomeImgs/logo.png"/>
    </div>
    <div class="home-option">
      <HomeOption
      content="hahaha"
      >
    </HomeOption>
    <HomeOption
    content="hahaha"
    >
  </HomeOption>
</div>

</div>
</template>

<style scoped>
.home-background{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/HomeImgs/background.jpg) center center no-repeat;
  background-size: 100% 100%;
}
.home-logo{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
}
.home-option{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
  import HomeOption from  '@/components/home/HomeOption.vue'

  export default {
    components: {
      HomeOption
    }
  }
</script>
