<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<svg class="icon" aria-hidden="true" @click="$router.go(-1)">
					<use xlink:href="#iconzuojiantou"></use>
				</svg>
			</template>
			<template v-slot:middle>
				<span>每日推荐</span>
			</template>
		</nav-bar>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
export default {
	name: 'Songlist',
	components: {
		NavBar
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less"></style>
