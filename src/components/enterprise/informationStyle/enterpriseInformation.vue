<template>
  <div>
    <div class="frame">
      <table>
        <tbody>
          <div v-for="(value,key,id)  in enterpriseInfo" v-if="id % 2== 0" :key="id">
              <td>
                {{Object.keys(enterpriseInfo)[id]}}
                <span>:</span>
                {{enterpriseInfo[Object.keys(enterpriseInfo)[id]]}}
              </td>
              <td v-if="id < objectLength(enterpriseInfo)">
                {{Object.keys(enterpriseInfo)[id+1]}}
                <span>:</span>
                {{enterpriseInfo[Object.keys(enterpriseInfo)[id+1]]}}
              </td>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.frame{
  margin: 20px auto;
  background: #fff;
  padding: 9px;
  width: 1000px;
  border-radius: 9px;
  border: 1px solid #ccc;
}
table td{
  width: 490px;
  padding: 16px;
  padding-left: 26px;
  border-bottom: 1px dotted #bbb;
  font-size: 1.1rem;
  color: #666;
  transition: all .6s ease;
}
table td:hover{
  background: #21a58f;
  color: #fff;
}
  table td>span{
    margin: 0 6px;
  }
</style>

<script>
import store from '@/store'

export default {
  name: 'enterpriseInformation',
  store,
  data () {
    return {
      enterpriseInfo: Object
    }
  },
  methods: {
    init: function () {
      console.log('11')
      this.enterpriseInfo = store.state.loginData.information
    },
    objectLength: function (object) {
      var count = 0
      for (var i in object) {
        count++
      }
      console.log(count)
      return count
    }
  },
  mounted: function () {
    console.log('enterpriseMpunted')
    this.init()
  }
}
</script>
