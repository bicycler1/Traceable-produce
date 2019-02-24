<template>
  <div>
    <div class="frame">
      <div class="button">
        <div>
          <buttton>
            <i class="fa fa-plus"></i>
            新增
          </buttton>
          <buttton>
            <i class="fa fa-trash"></i>
            新增
          </buttton>
        </div>
        <div>
          <buttton>
            <i class="fa fa-trash"></i>
            新增
          </buttton>
        </div>
      </div>
    </div>
    <div class="frame">
      adhkas
    </div>
  </div>
</template>

<style scoped>
.frame{
  margin-top: 20px;
}
  .button{
    position: relative;
    padding: 9px;
    background: #fff;
  }
  .button>div{
    display: flex;
    align-items: center;
  }
.button button{
  border-radius: 6px;
  border: #bbb solid 1px;
  background: #555;
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
