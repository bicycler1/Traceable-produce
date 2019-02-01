<template>
  <div>
    <div class="query-banner">
      <QueryBanner></QueryBanner>
    </div>
    <div class="query-background">
      <img src="../assets/QueryImgs/background.jpg" alt="">
    </div>
    <BlockQuery class="block-query"></BlockQuery>
    <div class="block-row">
      <Block
      class="block-left"
      className="fa fa-globe"
      bannerContent="新闻动态"
      imgSrc="1"
      :content="news"
      >
    </Block>
    <BlockRight 
    class="block-right"
    className="fa fa-globe"
    bannerContent="新闻动态"
    :content="news"
    >
  </BlockRight>
</div>

<div class="block-row">
  <Block
  class="block-left"
  className="fa fa-globe"
  bannerContent="新闻动态"
  imgSrc="1"
  :content="news"
  >
</Block>
<BlockRight 
class="block-right"
className="fa fa-globe"
bannerContent="新闻动态"
:content="news"
>
</BlockRight>
</div>
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
.block-query{
  margin: 16px auto;
  width: 80%;
}
.block-row{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px auto;
  width: 80%;
}
.block-left{
  width: 78%;
}
.block-right{
  position: absolute;
  top: 0;
  right: 0px;
  width: 18%;
}
.enterprise-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 16px auto;
}

</style>

<script>
  import QueryBanner from '@/components/query/banner.vue'
  import BlockQuery from '@/components/query/blockQuery.vue'
  import Block from '@/components/query/block.vue'
  import BlockRight from '@/components/query/blockRight.vue'
  import EnterpriseDemonstrate from '@/components/query/EnterpriseDemonstrate.vue'
  import axios from 'axios'
  import qs from 'qs'
  
  import MockAdapter from 'axios-mock-adapter'
  const mock = new MockAdapter(axios);
  mock.onPost('/query').reply(200, {
    news:[
    {
      'content':  '智诚乐创',
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
    }]
  });

  export default {
    components:{
      QueryBanner,
      BlockQuery,
      Block,
      BlockRight,
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
        _this.news = response.data.news;
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
</script>
