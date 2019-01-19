<template>
  <div class="banner">
    <router-link to="/query">
      <img src="../../assets/HomeImgs/logo.png" >
    </router-link>
    <div class="banner-option">
      <router-link to="/">
        <button>
          首页
        </button>
      </router-link>
      <router-link to="/query">
        <button>
          溯源查询
        </button>
      </router-link>
      <router-link to="/login">
        <button>
          企业查询
        </button>
      </router-link>
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
  box-shadow: 0 1px 2px #aaa;
}
.banner img{
  width: 450px;
  height: 66px;

}
.banner-option button{
  height: 100px;
  width: 90px;
  border-bottom: 4px solid #69caeb;
  margin-right: 2px;
  transition: border-bottom .6s ease;
  color: #fff;
}
.banner-option button:hover{
  background-color: #999;
  border-bottom: 4px solid #108ab3;
}
</style>

<script>
  export default {
    name: 'QueryBanner',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

