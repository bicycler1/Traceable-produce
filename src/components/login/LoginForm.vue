<template>
  <form action="Login_submit" method="get" accept-charset="utf-8">
    <div class="from">
      <div>
        用户登录
      </div>
      <input class="input-format" type="text" name="" placeholder="用户名" required="required" v-model="username">
      <input class="input-format" type="password" name="" placeholder="密码" required="required" v-model="password">
      <div class="checkbox">
        <label><input type="checkbox" name="" value="">记住密码</label>
        <div>
          注册备案
        </div>
      </div>
      <button type="" @click.prevent="login()">登录</button>
      <div class="login-bottom">
        <img src="../../assets/LoginImgs/login-boxbg.png">
      </div>
      <div class="login-bottom-tree">
        <img src="../../assets/LoginImgs/login-tree.png">
      </div>
    </div>
  </form>
</template>

<style scoped>
.from{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 560px;
  border-radius: 16px;
  background-color: #eee;
}
.from>div:nth-child(1){
  width: 100%;
  background-color: #00bd8d;
  color: #fff;
  line-height: 2;
  text-align: center;
  font-size: 1.3rem;
  border-radius: 16px 16px 0 0;
}
.input-format{
  width: 80%;
  height: 36px;
  padding: 6px;
  border: 1px solid #bbb;
  margin-top: 16px;
}
.input-format:focus{
  border: 1px solid #5fcef8;
}
.checkbox{
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  color: #666;
}
.checkbox>label{
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox input{
  width: 19px;
  height: 19px;
  margin-right: 10px;
}
.from button{
  margin: 16px 0 30px 0;
  width: 80%;
  background-color: #00bd8d;
  font-size: 1.3rem;
  line-height: 2;
  color: #fff;
}
.login-bottom{
  position: absolute;
  bottom: -19px;
  left: -3%;
}
.login-bottom>img{
  width: 110%;
  height: 110%;
}
.login-bottom-tree{
  position: absolute;
  bottom: -3px;
  left: -3%;
  transition: all 1.6s ease-in-out;
}
.login-bottom:hover+.login-bottom-tree{
  left: 10%;
}
</style>

<script>
import axios from 'axios'
import qs from 'qs'
import store from '@/store.js'
import router from '@/router.js'

// import MockAdapter from 'axios-mock-adapter'
// const mock = new MockAdapter(axios)
// mock.onPost('/login').reply(200, {
//   exist: 1,
//   name: '智诚乐创'
// })

export default {
  name: 'LoginForm',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      if (this.username !== '' && this.password !== '') {
        // var _this = this
        axios.post('/login', qs.stringify({
          'username': this.username,
          'password': this.password
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'timeout': 6000
          }
        })
          .then((response) => {
            if (response.status === 200) {
              store.commit('login', response.data)
              if (response.data.exist) {
                router.push({ path: '/enterprise' })
              } else {
                alert('用户名或密码错误')
              }
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
