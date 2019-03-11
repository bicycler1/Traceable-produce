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
          <div>
            <p>
              <i class="fa fa-dot-circle-o"></i>
              使用说明
            </p>
            <p>
              &nbsp;&nbsp;请依次输入农产品追溯标签上14位追溯码，点击“查询”获取详细的农产品生产档案信息
            </p>
          </div>
        </div>
        <div class="content-right">
          <div>
            请输入溯源码
          </div>
          <div>
            <input type="text" name="" placeholder="请输入溯源码" v-model="queryNumber">
            <button type="">马上溯源</button>
          </div>
        </div>
      </div>
    </div>
    <div class="block-right">
      <div>
        <i class="fa fa-address-book-o"></i>
        三农信息网
      </div>
      <div>
        <i class="fa fa-address-book"></i>
        三农信息网
      </div>
    </div>
  </div>
</template>

<style scoped>
.block{
  position: relative;
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
.banner i{
  margin: 0 16px;
  color: #62d800;
  font-size: 1.6rem;
}
.content{
  position: relative;
  width: 100%;
  margin-top: 20px;
  padding: 6px;
  color: #fff;
}
.content-left{
  width: 30%;
  background-color: #aaa;
  border-radius: 6px;
  height: 286px;
  padding: 16px 10px 8px 10px;
}
.content-left img{
  width: 100px;
  height: 100px;
  border: 9px solid #ddd;
}
.content-left>div:nth-child(1){
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
}
.content i{
  margin: 0 16px;
  color: #f08b1e;
  font-size: 1.6rem;
}
.content-left p{
  text-align: justify;
  line-height: 1.5;
}
.content-left p:nth-child(1){
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.content-right{
  position: absolute;
  top: 6px;
  right: 6px;
  width: 68%;
  height: 286px;
  background-color: #aaa;
  border-radius: 6px;
  padding: 16px 10px 8px 10px;
}
.content-right>div{
  margin: 16px 0;
}
.content-right input{
  border-radius: 6px;
  padding: 6px 16px;
  width: 60%;
  border: 2px solid #bbb;
  color: #777;
}
.content-right button{
  margin-left: 30px;
  width: 130px;
  height: 34px;
  background-color: #888;
  border-radius: 6px;
  border: 2px solid #bbb;
  color: #fff;
}
.block-right{
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 18%;
  height: 100%;
  background: #ddd;
  padding: 16px;
  font-size: 1.4rem;
  color: #fff;
}
.block-right>div:nth-child(1){
  background-color: #62d800;
}
.block-right>div:nth-child(2){
  background-color: #edad00;
}
.block-right>div{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90px;
  border-radius: 13px;
}
.block-right i{
  color: #eee;
  padding: 9px;
  margin: 16px;
  background-color: #999;
  border-radius: 6px;
}
</style>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'BlockQuery',
  data () {
    return {
      queryNumber: String
    }
  },
  methods: {
    traceQuery: function () {
      if(!this.queryNumber){
        axios.post('/query', qs.stringify({
          'queryNumber' : this.queryNumber
        }),
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'timeout': 6000
        })
        .then((response)=>{
          response.data
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
