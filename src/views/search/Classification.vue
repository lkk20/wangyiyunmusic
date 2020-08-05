<template>
	<div class="singer">
		<nav-bar>
			<template v-slot:left>
				<svg class="icon" aria-hidden="true" @click="$router.go(-1)">
					<use xlink:href="#iconzuojiantou"></use>
				</svg>
			</template>
		</nav-bar>
		<span>歌手分类</span>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
export default {
	name: 'Classification',
	components: {
		NavBar
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.singer {
	display: flex;
	align-items: center;
	span {
		margin-left: 30px;
	}
}
</style>
