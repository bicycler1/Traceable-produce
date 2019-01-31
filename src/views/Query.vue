<template>
  <div>
    <div class="query-banner">
      <QueryBanner></QueryBanner>
    </div>
    <div class="query-background">
      <img src="../assets/QueryImgs/background.jpg" alt="">
    </div>
    <Block
    className="fa fa-search"
    bannerContent="溯源查询"
    :content="news"
    >
  </Block>

  <div class="enterprise-row">
    <EnterpriseDemonstrate
    enterpriseName="智慧农业软件平台"
    enterpriseDescribe="智诚乐创"
    enterpriseImg="1"
    ></EnterpriseDemonstrate>
    <EnterpriseDemonstrate
    enterpriseName="智慧农业软件平台"
    enterpriseDescribe="智诚乐创"
    enterpriseImg="2"
    ></EnterpriseDemonstrate>
    <EnterpriseDemonstrate
    enterpriseName="智慧农业软件平台"
    enterpriseDescribe="智诚乐创"
    enterpriseImg="1"
    ></EnterpriseDemonstrate>
    <EnterpriseDemonstrate
    enterpriseName="智慧农业软件平台"
    enterpriseDescribe="智诚乐创"
    enterpriseImg="2"
    ></EnterpriseDemonstrate>
  </div>
</div>
</template>

<style scoped>
.query-banner{
  position: relative;
  top: 0;
  height: 100px;
}
.query-background{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.enterprise-row{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

<script>
  import QueryBanner from '@/components/query/banner.vue'
  import Block from '@/components/query/block.vue'
  import EnterpriseDemonstrate from '@/components/query/EnterpriseDemonstrate.vue'
  import axios from 'axios'
  import qs from 'qs'
  
  import MockAdapter from 'axios-mock-adapter'
    const mock = new MockAdapter(axios);
    mock.onPost('/query').reply(200, [{
            content:  '智诚乐创',
            time:"2019-1-31"
        },{
          content:  '智诚乐创',
          time:"2019-1-31"
        },{
          content:  '智诚乐创',
          time:"2019-1-31"
        },{
          content:  '智诚乐创',
          time:"2019-1-31"
        },{
          content:  '智诚乐创',
          time:"2019-1-31"
        },{
          content:  '智诚乐创',
          time:"2019-1-31"
        }]);

  export default {
    components:{
      QueryBanner,
      Block,
      EnterpriseDemonstrate
    },
    data() {
      return {
        news: []
      }
    },
    methods: {

    },
    mounted: function () {
      var _this = this;
      axios.post('/query',qs.stringify({
        name: 'news'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'timeout': 6000
        }
      })
      .then((response) => {
        _this.news = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
</script>
