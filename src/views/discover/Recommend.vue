<template>
	<div>
		<ul>
			<li
				v-for="([key, value], index) in Object.entries(tabsData)"
				:key="index"
				@click="$router.push(`${key}`)"
			>
				{{ value }}
			</li>
		</ul>
		<h4>精品歌单推荐</h4>
		<article class="list">
			<square-music
				v-for="(item, index) in playlist"
				:key="index"
				:id="item.id"
			>
				<template v-slot:image>
					<van-image
						:src="`${item.coverImgUrl}`"
						:alt="`${item.name}`"
						fit="cover"
					/>
				</template>
				<template v-slot:describe>{{ item.copywriter }}</template>
				<template v-slot:play>{{ item.playCount }}万</template>
			</square-music>
		</article>
		<h4>精品MV推荐</h4>
		<article class="mv">
			<div
				v-for="(item, index) in mv"
				:key="index"
				@click="add(item.name, item.picUrl)"
			>
				<mv-rec :id="item.id">
					<template v-slot:image>
						<van-image
							:src="`${item.picUrl}`"
							:alt="`${item.name}`"
							fit="cover"
						/>
					</template>
					<template v-slot:describe>{{ item.copywriter }}</template>
					<template v-slot:play>{{ item.playCount }}万</template>
				</mv-rec>
			</div>
		</article>
	</div>
</template>

<script>
import SquareMusic from '@components/common/SquareMusic'
import MvRec from '@components/common/MvRec'
import { Image as VanImage } from 'vant'
export default {
	name: 'Recommend',
	components: { SquareMusic, MvRec, [VanImage.name]: VanImage },
	data() {
		return {
			tabsData: {
				everyday: '每日推荐',
				songlist: '歌单',
				mv: 'MV',
				list: '排行榜',
				radio: '电台'
			},
			playlist: [],
			mv: []
		}
	},
	methods: {
		async getReclist() {
			let list = await this.$http.get('/top/playlist/highquality?limit=3')
			let mv = await this.$http.get('/personalized/mv')

			if (list.code !== 200 && mv.code !== 200) {
				this.$toast.fail('加载失败')
			} else {
				this.changePlayCount(list.playlists)
				this.changePlayCount(mv.result)

				this.playlist = list.playlists
				this.mv = mv.result
			}
		},
		changePlayCount(arr) {
			arr.forEach(e => {
				e.playCount = Math.round(e.playCount / 10000)
			})
		},
		add(...info) {
			this.$store.commit('changeInfo', info)
		}
	},
	created() {
		this.getReclist()
	}
}
</script>

<style scoped lang="less">
ul {
	padding: 0 1.875rem;
	display: flex;
	justify-content: space-around;
	height: 100%;
	margin: 20px 0;
}
.list {
	padding: 0 10px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}
.mv {
	padding: 0 10px;
	display: grid;
	grid-template-columns: 1fr 1fr;
}
h4 {
	padding: 10px 20px;
}
</style>
