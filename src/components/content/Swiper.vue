<template>
	<div class="Swiper">
		<van-swipe :autoplay="3000">
			<van-swipe-item
				v-for="(image, index) in Object.entries(images)"
				:key="index"
			>
				<img
					v-lazy="`${image[1]}`"
					@click="$router.push(`/playlist?id=${image[0]}`)"
				/>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
	name: 'Swiper',
	components: {
		[Swipe.name]: Swipe,
		[SwipeItem.name]: SwipeItem
	},
	data() {
		return {
			images: {}
		}
	},
	methods: {
		async getImg() {
			let list = await this.$http.get('/top/playlist/highquality?limit=5')
			if (list.code !== 200) {
				this.$toast.fail('加载失败')
			} else {
				list.playlists.forEach(e => {
					this.images[e.id] = e.coverImgUrl
				})
			}
		}
	},
	created() {
		this.getImg()
	}
}
</script>

<style scoped lang="less">
.Swiper {
	margin: 0.625rem 1.25rem;
	height: 9.375rem;

	border-radius: 0.3125rem;
	.van-swipe {
		width: 100%;
		height: 100%;
		.van-swipe-item {
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				border-radius: 0.3125rem;
			}
		}
	}
}
</style>
