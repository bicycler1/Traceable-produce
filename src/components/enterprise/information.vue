<template>
  <router-view>

  </router-view>
</template>

<style scoped>
.content{
  width: 80%;
  height: 70%;
  margin: 26px auto;
  padding: 26px 36px;
  background-color: #fff;
  border-radius: 16px;
  border-top: 2px solid #999;
}
</style>

<script>
import store from '@/store.js'

export default {
  name: 'enterpriseInformation',
  data () {
    return {
      info: []
    }
  },
  methods: {
    init: function () {
      this.info = store.state.enterpriseInfo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
