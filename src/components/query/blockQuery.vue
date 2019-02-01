<template>
  <div class="block">
    <div class="block-left">
      <div class="banner">
        <div class="banner-left">
          <i class="fa fa-search"></i>
          溯源查询
        </div>
      </div>
      <div class="content">
        <div class="content-left">
          <div>
            <img src="../../assets/QueryImgs/qrCode.png" alt="">
            <span>
              &nbsp;&nbsp;立刻扫码下载<br>
              &nbsp;&nbsp;溯源移动APP
            </span>
          </div>
        </div>
        <div class="content-right">
          asdadad
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block{
  width: 100%;
}
.block-left{
  position: relative;
  width: 78%;
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
.content{
  position: relative;
  width: 30%;
}
.content-left img{
  width: 100px;
  height: 100px;
}
.content-left>div{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
  export default {
    name: 'BlockQuery',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

