<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<svg class="icon" aria-hidden="true" @click="$router.go(-1)">
					<use xlink:href="#iconzuojiantou"></use>
				</svg>
			</template>
		</nav-bar>
		<h1>404 Not Found</h1>
		<mark @click="$router.replace('/')">返回首页</mark>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
export default {
	components: {
		NavBar
	},
	name: 'NotFound',
	data() {
		return {}
	}
}
</script>

<style scoped lang="less"></style>
