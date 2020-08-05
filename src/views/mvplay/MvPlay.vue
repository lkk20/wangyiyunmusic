<template>
	<div>
		<div class="bg">
			<img :src="info[1]" alt="背景图片" />
		</div>
		<main>
			<nav-bar>
				<template v-slot:left>
					<svg class="icon" aria-hidden="true" @click="$router.go(-1)">
						<use xlink:href="#iconzuojiantou"></use>
					</svg>
				</template>
				<template v-slot:middle>
					{{ info[0] }}
				</template>
				<template v-slot:right>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#iconfenxiang"></use>
					</svg>
				</template>
			</nav-bar>
			<article>
				<video :src="`${mv.url}`" controls autoplay :poster="info[1]">
					硬件不能不放视频
				</video>
			</article>
		</main>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'

import { Image as VanImage } from 'vant'
export default {
	name: 'Play',
	components: { NavBar, [VanImage.name]: VanImage },

	data() {
		return {
			mv: {},
			info: []
		}
	},

	methods: {
		async getMusic() {
			try {
				let mv = await this.$http.get(`/mv/url?id=${this.$route.query.id}`)

				if (mv.code !== 200) {
					this.$toast.fail('获取失败')
				} else {
					this.mv = mv.data
				}
			} catch (error) {
				this.$toast.fail('请求超时')
			}
		}
	},
	created() {
		this.getMusic()
	},
	mounted() {
		this.info = this.$store.state.info
	}
}
</script>

<style scoped lang="less">
main {
	position: absolute;
	width: 100%;
	height: 100%;

	article {
		margin: 20px auto;
		width: 350px;
		height: 200px;
		video {
			width: 100%;
			height: 100%;
		}
	}
}
.bg {
	position: fixed;
	float: left;
	height: 100vh;
	filter: blur(150px);
}
</style>
