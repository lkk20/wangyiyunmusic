<template>
	<div class="list" @click="$router.push(`/play?id=${songid}`)">
		<span class="left"><slot name="left"></slot></span>
		<span class="middle"><slot name="topmiddle"></slot></span>
		<span class="middle"><slot name="butmiddle"></slot></span>
		<span class="right"><slot name="right"></slot></span>
	</div>
</template>

<script>
export default {
	name: 'SongPlayList',
	//接受id
	props: {
		songid: {
			type: String
		}
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.list {
	color: gray;
	padding: 0 10px;
	display: grid;
	grid-template-columns: 1fr 6fr 1fr;
	grid-template-rows: repeat(2, 50%);
	align-items: center;
	.left {
		justify-self: center;
		grid-row: 1 / span 2;
		grid-column: 1 / span 1;
	}
	.right {
		justify-self: center;
		grid-column: 3 / span 1;
		grid-row: 1 / span 2;
		writing-mode: vertical-rl;
	}
	.middle {
		padding-left: 10px;
		font-size: 12px;
	}
}
</style>
