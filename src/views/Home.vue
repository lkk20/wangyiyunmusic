<template>
	<div class="home">
		<discover-top></discover-top>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import DiscoverTop from '@views/discover/DiscoverTop'

export default {
	name: 'Home',
	components: {
		DiscoverTop
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less"></style>
