<template>
  <div>
    <div class="frame">
      <div class="button">
        <div>
          <button>
            <i class="fa fa-plus"></i>
            新增
          </button>
          <button>
            <i class="fa fa-trash"></i>
            新增
          </button>
        </div>
        <div>
          <button>
            <i class="fa fa-trash"></i>
            新增
          </button>
        </div>
      </div>
    </div>
    <div class="frame">
      <table>
        <tbody>
        <tr class="table-head">
          <td>
            选择
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.frame{
  margin-top: 20px;
  background: #fff;
  padding: 9px;
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
  border: #999 solid 1px;
  background: #ddd;
  margin-left: 6px;
  padding: 9px;
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
  .table-head{
    background: #f9fffe;
    width: 96%;
    border-bottom: 2px solid #00bd8d;
  }

</style>

<script>
import store from '@/store'
export default {
  name: 'baseInformation',
  store,
  data () {
    return {
      list: {
        title: 'hahhahahahahahaahahah'
      }
    }
  },
  methods: {
    init: function () {
      this.list = store.state.enterpriseLeft
      console.log(this.list)
    }
  },
  mounted: function () {
    console.log('11')
  }
}
</script>
