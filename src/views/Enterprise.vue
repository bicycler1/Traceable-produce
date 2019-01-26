<template>
    <div>
      <EnterpriseBanner @refreshList="changeLeftList()"></EnterpriseBanner>
      <div class="left-list">
        <div v-for="(item,id) in list.info"
            :key="id"
        >
            <i class="fa fa-circle-o"></i>
            {{item}}
        </div>
      </div>
      <div class="right-info">
          <div class="content-header">
              {{list.title}}
          </div>
      </div>
    </div>
</template>

<style scoped>
.left-list{
    position: absolute;
    top: 0;
    padding-top: 80px;
    height: 100%;
    width: 20%;
    background-color: #fff;
    box-sizing: border-box;
    z-index: -1;
}
.left-list>div{
    padding: 0 26px;
    line-height: 60px;
    height: 60px;
    font-size: 1.3rem;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
}
.left-list>div>i{
    margin-right: 16px;
}
.left-list>div:hover{
    background-color: #25aed4;
    border-left: 6px solid #1b82b4;
    color: #fff;
}
.right-info{
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 100%;
    padding-top: 80px;
    background-color: #ecf0f5;
    z-index: -1;
}
</style>

<script>
import EnterpriseBanner from '@/components/enterprise/banner.vue'
import store from '@/store'

    export default {
      name: "Enterprise",
      store,
      components: {
        EnterpriseBanner
      },
      data () {
        return {
            list: {
                title: "基本信息",
                info: ['企业信息','仓库管理','种植基地管理','农产品信息管理']
            }
        }
      },
      methods: {
        changeLeftList: function () {
            this.list = store.state.enterpriseLeft;
        }
      }
  }
</script>
