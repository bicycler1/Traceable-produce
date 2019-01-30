<template>
    <div>
      <EnterpriseBanner @refreshList="changeLeftList()"></EnterpriseBanner>
      <div class="left-list">
        <div v-for="(item,id) in list.info"
        :key="id"
        @click.prevent="changeRightHeader(id);changeRightInfo(id)"
        >
        <i class="fa fa-circle-o"></i>
        {{item}}
    </div>
</div>
<div class="right-info">
  <div class="content-header">
      <span><i class="fa fa-dashboard"></i></span>
      <span>首页</span>
      <span>></span>
      <span>{{list.title}}</span>
      <span>></span>
      <span>{{listChoose}}</span>
  </div>
  <enterpriseInformation></enterpriseInformation>
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
    box-sizing: border-box;
}
.content-header{
    padding: 16px 6px 0 6px;
    color: #666;
}
.content-header>span{
    margin: 0 6px;
}
.content-header>span:last-child{
    color: #00bd8d;
}
</style>

<script>
    import enterpriseInformation from '@/components/enterprise/information.vue'
    import EnterpriseBanner from '@/components/enterprise/banner.vue'
    import store from '@/store'
    import axios from 'axios'
    import qs from 'qs'

    import MockAdapter from 'axios-mock-adapter'
    const mock = new MockAdapter(axios);
    mock.onPost('/enterprise').reply(200, {
        exist: 1,
        name: '智诚乐创'
    });

    export default {
      name: "Enterprise",
      store,
      components: {
        EnterpriseBanner,
        enterpriseInformation
    },
    data () {
        return {
            list: {
                title: "基本信息",
                info: ['企业信息','仓库管理','种植基地管理','农产品信息管理']
            },
            listChoose: "企业信息"
        }
    },
    methods: {
        changeLeftList: function () {
            this.list = store.state.enterpriseLeft;
            var listInfo = this.list.info;
            this.listChoose = listInfo[0];
        },
        changeRightHeader: function (id) {
            var listInfo = this.list.info;
            this.listChoose = listInfo[id];
        },
        changeRightInfo: function () {
            axios.post('/enterprise',qs.stringify({
                title: this.list.title,
                listChoose: this.listChoose
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'timeout': 6000
                }
            })
            .then((response) => {
                if(response.status === 200){
                    store.commit('getEnterpriseInfo',response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

}
</script>
