<template>
	<div id="app">
		<router-view>
			<Home>
			</Home>
		</router-view>
	</div>
</template>

<style scoped>

</style>

<script>
import Home from '@/views/Home.vue'

export default {
  components: {
    Home
  }
}

/* import router from './router'
export default {
  router,
  mounted: function () {
    this.$router.push([{path: '/'}])
  }
} */
</script>
