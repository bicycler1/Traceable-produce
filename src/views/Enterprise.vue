<template>
    <div>
      <EnterpriseBanner @refreshList="changeLeftList()"></EnterpriseBanner>
      <div class="left-list">
        <div v-for="(item,id) in list.info"
        :key="id"
        @click.prevent="changeRightHeader(id);"
        >
          <router-link :to=informationStyle(id)>
            <i class="fa fa-circle-o"></i>
            {{item}}
          </router-link>
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
  <router-view ref="enterpriseInfo">
  </router-view>

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
  color: #444;
}
.left-list>div i{
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
import EnterpriseBanner from '@/components/enterprise/banner.vue'
import store from '@/store'
import axios from 'axios'
import qs from 'qs'

// import MockAdapter from 'axios-mock-adapter'
// const mock = new MockAdapter(axios)
// mock.onPost('/enterprise').reply(200, [{
//   name: '智诚乐创',
//   value: 'hahhha'
// }]
// )

export default {
  name: 'Enterprise',
  store,
  components: {
    EnterpriseBanner
  },
  data () {
    return {
      list: {
        title: '基本信息',
        info: ['企业信息', '仓库管理', '种植基地管理', '农产品信息管理']
      },
      listChoose: '企业信息'
    }
  },
  methods: {
    changeLeftList: function () {
      this.list = store.state.enterpriseLeft
      var listInfo = this.list.info
      this.listChoose = listInfo[0]
    },
    changeRightHeader: function (id) {
      var listInfo = this.list.info
      this.listChoose = listInfo[id]
      this.pushInfoHeader(id)
      this.$refs.enterpriseInfo.init()
    },
    pushInfoHeader: function (id) {
      let infoHeader = []
      if (this.list.title === '基本信息') {
        switch (id) {
          case 0:
            infoHeader = []
            break
          case 1:
            infoHeader = ['编号', '仓库名称', '所属企业', '管理员', '温度（℃）', '湿度（%）', '仓库面积（㎡）']
            break
          case 2:
            infoHeader = ['编号', '基地名称', '基地占地面积', '所属企业', '管理员', '管理员联系方式']
            break
          case 3:
            infoHeader = ['编号', '农产品名称', '农产品类别', '农产品等级', '生产企业名称']
            break
          default:
            infoHeader = []
            break
        }
      } else if (this.list.title === '农资准入') {
        switch (id) {
          case 0:
            infoHeader = ['编号', '申请日期', '种苗名称', '审核状态', '审核人', '审核时间', '驳回理由', '生产商']
            break
          case 1:
            infoHeader = ['编号', '申请日期', '化肥名称', '审核状态', '审核人', '审核时间', '驳回理由', '生产商']
            break
          case 2:
            infoHeader = ['编号', '申请日期', '农药名称', '审核状态', '审核人', '审核时间', '驳回理由', '生产商']
            break
          default:
            infoHeader = []
        }
      } else if (this.list.title === '采购管理') {
        switch (id) {
          case 0:
            infoHeader = ['编号', '种苗名称', '出苗率', '成活率', '供应商', '采购人', '采购时间']
            break
          case 1:
            infoHeader = ['编号', '农药名称', '供应商', '采购人', '采购时间', '采购数量', '单位']
            break
          case 2:
            infoHeader = ['编号', '化肥名称', '供应商', '采购人', '采购时间', '采购数量', '单位']
            break
          default:
            infoHeader = []
        }
      } else if (this.list.title === '生产管理') {
        switch (id) {
          case 0:
            infoHeader = ['编号', '种植时间', '农户姓名', '农产品名称', '种子种苗', '种植面积', '状态']
            break
          case 1:
            infoHeader = ['编号', '农事操作类型', '农事操作时间', '农户姓名', '种植面积', '状态']
            break
          case 2:
            infoHeader = ['编号', '农药使用日期', '农药生产商', '农产品名称', '基地名称', '地块名称', '地块面积', '每亩实际用量/标准用量']
            break
          case 3:
            infoHeader = ['编号', '化肥使用日期', '化肥生产商', '农产品名称', '基地名称', '地块名称', '地块面积', '每亩实际用量/标准用量']
            break
          default:
            infoHeader = []
        }
      } else if (this.list.title === '销售物流') {
        switch (id) {
          case 0:
            infoHeader = ['编号', '销售单号', '经销商', '销售量', '销售日期', '操作人']
            break
          case 1:
            infoHeader = ['编号', '发货单号', '发货日期', '运送方式', '第三方物流', '物流单号']
            break
          default:
            infoHeader = []
        }
      }
      store.commit('pushEnterprisreInfoHeader', infoHeader)
    },
    // changeRightInfo: function (id) {
    //   axios.post('/enterprise', qs.stringify({
    //     title: this.list.title,
    //     listChoose: this.listChoose
    //   }),
    //   {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'timeout': 6000
    //     }
    //   })
    //     .then((response) => {
    //       if (response.status === 200) {
    //         store.commit('getEnterpriseInfo', response.data)
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    informationStyle: function (id) {
      if (this.list.title === '基本信息') {
        switch (id) {
          case 0:
            return '/enterpriseInformation'
          case 1:
            return '/baseInformation'
          case 2:
            return '/baseInformation'
          case 3:
            return '/baseInformation'
        }
      } else if (this.list.title === '农资准入') {
        switch (id) {
          case 0:
            return '/baseInformation'
          case 1:
            return '/baseInformation'
          case 2:
            return '/baseInformation'
        }
      } else if (this.list.title === '采购管理') {
        switch (id) {
          case 0:
            return '/baseInformation'
          case 1:
            return '/baseInformation'
          case 2:
            return '/baseInformation'
        }
      } else if (this.list.title === '生产管理') {
        switch (id) {
          case 0:
            return '/baseInformation'
          case 1:
            return '/baseInformation'
          case 2:
            return '/baseInformation'
          case 3:
            return '/baseInformation'
        }
      } else if (this.list.title === '销售物流') {
        switch (id) {
          case 0:
            return '/baseInformation'
          case 1:
            return '/baseInformation'
        }
      }
    }
  }
}
</script>
