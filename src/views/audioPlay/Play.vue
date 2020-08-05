<template>
	<div>
		<div class="bg">
			<img :src="info[2]" alt="背景图片" />
		</div>
		<main>
			<nav-bar>
				<template v-slot:left>
					<svg class="icon" aria-hidden="true" @click="$router.go(-1)">
						<use xlink:href="#iconzuojiantou"></use>
					</svg>
				</template>
				<template v-slot:middle>
					{{ info[1] }}
				</template>
				<template v-slot:right>
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#iconfenxiang"></use>
					</svg>
				</template>
			</nav-bar>
			<figure class="detail">
				<figcaption>{{ info[1] }}</figcaption>
				<van-image round width="15rem" height="15rem" :src="info[2]" />

				<small>{{ info[1] }}</small>
			</figure>
			<audio autoplay controls :src="music.url">
				Your browser does not support the audio element.
			</audio>
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
			music: {},
			info: []
		}
	},

	methods: {
		async getMusic() {
			try {
				let detail = await this.$http.get(
					`/song/url?id=${this.$route.query.id}`
				)

				if (detail.code !== 200) {
					this.$toast.fail('获取失败')
				} else {
					this.music = detail.data[0]
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
	.detail {
		margin-top: 3.125rem;
		text-align: center;

		.van-image {
			margin: 1.875rem 0;
			filter: blur(0);
		}
		small {
			display: block;
		}
	}
	audio {
		margin: 100px 50px;
	}
}

.bg {
	position: fixed;
	float: left;
	height: 100vh;

	filter: blur(150px);
}
</style>
