<template>
  <div>
    <div class="frame">
      <table border="1">
        <tbody>
        <tr v-for="(value,key,id)  in enterpriseInfo"
        :key="id">
          <td>
            <span>
              {{key}}
            </span>
            <span>
              :
            </span>
            <span>
              {{value}}
            </span>
          </td>
        </tr>
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
  width: 96%;
  border-radius: 9px;
  border: 1px solid #ccc;
}
table{
  width: 100%;
}
table td{
  padding: 6px 6px 6px 16px;
  border-bottom: 1px dotted #bbb;
  transition: all .6s ease;
}
table td:hover{
  background: #28d5db;
}
  table td>span{
    margin-right: 6px;
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
    }
  },
  mounted: function () {
    console.log('enterpriseMpunted')
    this.init()
  }
}
</script>
