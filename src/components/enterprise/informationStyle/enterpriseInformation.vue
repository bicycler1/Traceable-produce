<template>
  <div>
    <div class="frame">
      <table>
        <tbody>
        <tr v-for="(value,key,id)  in enterpriseInfo"
        :key="id">
          <td>
            {{key}}:{{value}}
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
}
</style>

<script>
import store from '@/store'
export default {
  name: 'baseInformation',
  store,
  data () {
    return {
      enterpriseInfo: Object
    }
  },
  methods: {
    init: function () {
      this.enterpriseInfo = store.state.loginData.information
      console.log('22')
      console.log(this.enterpriseInfo)
    }
  }
}
</script>
