<template>
  <div>
    <div class="background">

    </div>
    <div class="banner">
      <router-link to="/login">
        <img src="../assets/LoginImgs/loginLogo.png" >
      </router-link>
    </div>
    <div class="login">
      <div>
        <img src="../assets/LoginImgs/loginImg.png">
      </div>
      <div>
        <form action="Login_submit" method="get" accept-charset="utf-8">
          <div class="from">
            <div>
              用户登录
            </div>
            <div>
              <input type="" name="" >
            </div>
            <div>
              用户登录
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background{
  position: absolute;
  top: 0;
  width: 0;
  width: 100%;
  height: 100%;
  background: url(../assets/LoginImgs/background.png) center center no-repeat;
  background-size: 100% 100%;
}
.banner{
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100px;
  background-color: #fff; 
  box-shadow: 0 1px 2px #ddd;
  width: 100%;
}
.banner img{
  width: 560px;
  height: 66px;
  margin-left: 9%;
}
.login{
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
  width: 100%;
}
.from{
  width: 360px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #eee;
}
.from>div:nth-child(1){
  position: relative;
  background-color: #00bd8d;
  color: #fff;
  line-height: 2.5;
  text-align: center;
}
.from>div:nth-child(2){
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>

</script>
