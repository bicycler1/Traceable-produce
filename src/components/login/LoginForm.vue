<template>
  <form action="Login_submit" method="get" accept-charset="utf-8">
          <div class="from">
            <div>
              用户登录
            </div>
            <div>
              <input type="text" name="" placeholder="用户名" v-model="username">
            </div>
            <div>
              <input type="password" name="" placeholder="密码" v-model="password">
            </div>
            <div>
              <div>
                <span><input type="checkbox"></span>
                <span>记住密码</span>
              </div>
              <div>
                注册备案
              </div>
            </div>
          </div>
        </form>
</template>

<style scoped>
.from{
  width: 560px;
  border-radius: 16px;
  overflow: hidden;
  background-color: #eee;
}
.from>div:nth-child(1){
  position: relative;
  background-color: #00bd8d;
  color: #fff;
  line-height: 2;
  text-align: center;
  font-size: 1.3rem
}
.from>div:nth-child(2){
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}
.from>div:nth-child(3){
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}
.from>div:nth:child(2),div:nthchild(3) input{
  width: 80%;
  height: 36px;
  padding: 6px;
  border: 1px solid #bbb;
}
.from input:focus{
  border: 1px solid #5fcef8;
}
.checkbox{
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 16px;
}
</style>

<script>
  export default {
    name: 'LoginForm',
    data () {
      return {
        username: "",
        password: ""
      }
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

