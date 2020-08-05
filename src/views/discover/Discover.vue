<template>
	<div class="Discover">
		<swiper></swiper>
		<recommend></recommend>
	</div>
</template>

<script>
import Swiper from '@components/content/Swiper'
import Recommend from '@views/discover/Recommend'
export default {
	name: 'Discover',
	components: {
		Swiper,
		Recommend
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less"></style>
