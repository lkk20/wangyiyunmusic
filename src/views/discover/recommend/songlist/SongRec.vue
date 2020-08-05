<template>
	<div class="song-rec">
		<square-music v-for="(item, index) in musicList" :key="index" :id="item.id">
			<template v-slot:image
				><img :src="`${item.picUrl}`" :alt="`${item.name}`"
			/></template>
			<template v-slot:describe>{{ item.name }}</template>
			<template v-slot:play> {{ item.playCount }}万</template>
		</square-music>
	</div>
</template>

<script>
import SquareMusic from '@components/common/SquareMusic'
export default {
	name: 'SongRec',
	components: { SquareMusic },
	data() {
		return {
			musicList: []
		}
	},
	methods: {
		async getMusicInfo() {
			try {
				let list = await this.$http.get('/personalized')

				if (list.code !== 200) {
					this.$toast.fail('获取失败')
				} else {
					list.result.forEach(item => {
						item.playCount = Math.round(item.playCount / 10000)
					})
					this.musicList = list.result
				}
			} catch (error) {
				this.$toast.fail('请求超时')
			}
		}
	},
	created() {
		this.getMusicInfo()
	}
}
</script>

<style scoped lang="less">
.song-rec {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 5px;
}
</style>
