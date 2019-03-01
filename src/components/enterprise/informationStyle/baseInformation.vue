<template>
  <div>
    <div class="frame">
      <div class="button">
        <div>
          <button class="add">
            <i class="fa fa-plus"></i>
            新增
          </button>
          <button class="delete">
            <i class="fa fa-trash"></i>
            删除
          </button>
        </div>
        <div>
          <button class="query">
            <i class="fa fa-search"></i>
            查询
          </button>
        </div>
      </div>
    </div>
    <div class="frame">
      <table>
        <thead>
        <tr>
          <th v-for="(item,id) in enterpriseInfoHeader"
          :key="id">
            {{item}}
          </th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              asdhasda
            </td>
            <td>
              asdhasda
            </td>
            <td>
              asdhasda
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
  .button{
    position: relative;
  }
  .button>div{
    display: flex;
    align-items: center;
  }
.button button{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin: 0 6px;
  padding: 9px;
}
.add{
  background: #f4f4f4;
  color: #444;
}
.add:hover{
  background: #fff;
}
.delete{
  background: #dd4b39;
  color: #fff;
}
.delete:hover{
  background: #aa392b;
}
.query{
  background: #00bd8d;
  color: #fff;
}
.query:hover{
  background: #148b6d;
}
  .button>div:nth-child(1){
    position: relative;
    top: 0;
    left: 0;
  }
.button>div:nth-child(2){
  position: absolute;
  top: 0;
  right: 9px;
  height: 100%;
}
table{
  width: 100%;
}
  table th{
    height: 36px;
    line-height: 36px;
    background: #f9fffe;
    border: 1px solid #ccc;
    border-bottom: 2px solid #00bd8d ;
    font-weight: normal;
  }
table th:nth-child(1){
  width: 100px;
}
table td{
  padding: 6px 6px 6px 16px;
  border: 1px solid #ccc;
}
</style>

<script>
import store from '@/store'
export default {
  name: 'baseInformation',
  store,
  data () {
    return {
      enterpriseInfoHeader: Array
    }
  },
  methods: {
    init: function () {
      this.enterpriseInfoHeader = store.state.enterpriseInfoHeader
      console.log('11')
      console.log(this.enterpriseInfoHeader)
    }
  },
  mounted: function () {
    console.log('mountedbase')
    this.enterpriseInfoHeader = store.state.enterpriseInfoHeader
  }
}
</script>
