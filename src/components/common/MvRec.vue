<template>
	<div class="slot-music" @click="$router.push(`/mvplay?id=${id}`)">
		<figure>
			<slot name="image" class="image"> </slot>
			<p class="describe"><slot name="describe"></slot></p>
		</figure>
		<span class="play">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#iconiconset0481"></use>
			</svg>
			<small><slot name="play"></slot></small>
		</span>
	</div>
</template>

<script>
export default {
	name: 'MvRec',
	props: {
		id: {
			type: Number
		}
	},
	data() {
		return {}
	}
}
</script>

<style scoped lang="less">
.slot-music {
	display: inline-block;
	padding: 0.125rem;
	box-sizing: border-box;
	position: relative;
	figure {
		width: 100%;
		.describe {
			color: gray;
			font-size: 14px;
		}
		img {
			width: 100%;
		}
	}
	.play {
		display: inline-block;
		display: flex;
		position: absolute;
		top: 10px;
		right: 10px;
		color: rgb(87, 84, 84);
		font-weight: bolder;
		.icon {
			width: 20px;
			height: 20px;
			color: rgb(87, 84, 84);
		}
	}
}
</style>
