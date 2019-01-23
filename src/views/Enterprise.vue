<template>
    <div>
      <EnterpriseBanner @refreshList="changeLeftList()"></EnterpriseBanner>
      <div class="left-list">
        <div v-for="(item,id) in list"
            :key="id"
        >
            {{item}}
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
            list: ['企业信息','仓库管理','种植基地管理','农产品信息管理']
        }
      },
      methods: {
        changeLeftList: function () {
            this.list = store.state.enterpriseLeft;
        }
      }
  }
</script>
