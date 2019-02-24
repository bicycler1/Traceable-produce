<template>
  <div>
    <div>
      {{list.title}}
    </div>
    <div>
      adhkas
    </div>
  </div>
</template>

<style scoped>
div{
  margin-top: 20px;
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
  }
}
</script>
