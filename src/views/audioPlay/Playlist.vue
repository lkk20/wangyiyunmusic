<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<svg class="icon" aria-hidden="true" @click="$router.go(-1)">
					<use xlink:href="#iconzuojiantou"></use>
				</svg>
			</template>
			<template v-slot:middle>
				{{ playList.name }}
			</template>
			<template v-slot:right>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#iconfenxiang"></use>
				</svg>
			</template>
		</nav-bar>
		<header class="detail">
			<square-music>
				<template v-slot:image>
					<van-image
						:src="`${playList.coverImgUrl}`"
						:alt="`${playList.name}`"
						fit="cover"
				/></template>
				<template v-slot:play> {{ playList.playCount }}万</template>
			</square-music>
			<div class="describe">
				<h4>{{ playList.name }}</h4>
				<van-image
					v-if="playList.creator.avatarUrl == 'undefind'"
					round
					width="2rem"
					height="2rem"
					:src="`${playList.creator.avatarUrl}`"
				/>
				<van-image
					v-else
					round
					width="2rem"
					height="2rem"
					:src="`${playList.creator.backgroundUrl}`"
				/>
				<span class="description"
					><small>{{ playList.description }}</small></span
				>
			</div>
		</header>
		<article
			v-for="(item, index) in playList.tracks"
			@click="add(item.ar[0].name, item.name, item.al.picUrl)"
			:key="index"
		>
			<song-play-list :songid="`${item.id}`">
				<template v-slot:left>{{ index + 1 }}</template>
				<template v-slot:topmiddle>{{ item.name }}</template>
				<template v-slot:butmiddle>{{ item.ar[0].name }}</template>
				<template v-slot:right>...</template>
			</song-play-list>
		</article>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
import SquareMusic from '@components/common/SquareMusic'
import SongPlayList from '@components/common/SongPlayList'
import { Image as VanImage } from 'vant'
export default {
	name: 'Playlist',
	components: { NavBar, SquareMusic, SongPlayList, [VanImage.name]: VanImage },
	data() {
		return {
			playList: {},
			privileges: []
		}
	},
	methods: {
		async getPlayList() {
			try {
				let list = await this.$http.get(
					`/playlist/detail?id=${this.$route.query.id}`
				)

				if (list.code !== 200) {
					this.$toast.fail('获取失败')
				} else {
					list.playlist.playCount = Math.round(list.playlist.playCount / 10000)

					this.playList = list.playlist
					this.privileges = list.privileges
				}
			} catch (error) {
				this.$toast.fail('请求超时')
			}
		},
		add(...info) {
			this.$store.commit('changeInfo', info)
		}
	},

	created() {
		this.getPlayList()
	}
}
</script>

<style scoped lang="less">
.detail {
	margin: 10px;
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-column-gap: 20px;
	.description {
		display: inline-block;
		height: 50px;
		padding: 10px 20px;
		overflow: hidden;
	}
}
</style>
