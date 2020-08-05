<template>
	<div>
		<nav-bar class="head">
			<template v-slot:left>
				<svg class="icon" aria-hidden="true" @click="$router.go(-1)">
					<use xlink:href="#iconzuojiantou"></use>
				</svg>
			</template>
			<template v-slot:middle>
				<span>歌单广场</span>
			</template>
		</nav-bar>
		<van-tabs v-model="active" sticky>
			<van-tab title="推荐"><song-rec></song-rec></van-tab>
			<van-tab title="官方"><official></official></van-tab>
			<van-tab title="精品"><top></top></van-tab>
			<van-tab title="华语"><chinese></chinese></van-tab>
			<van-tab title="民谣"><village-music></village-music></van-tab>
			<van-tab title="流行"><popular></popular></van-tab>
			<van-tab title="电子"><electronics></electronics></van-tab>
			<van-tab title="轻音乐"><light-music></light-music></van-tab>
		</van-tabs>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
import SongRec from '@views/discover/recommend/songlist/SongRec'
import Chinese from '@views/discover/recommend/songlist/Chinese'
import Electronics from '@views/discover/recommend/songlist/Electronics'
import LightMusic from '@views/discover/recommend/songlist/LightMusic.'
import Official from '@views/discover/recommend/songlist/Official'
import Popular from '@views/discover/recommend/songlist/Popular'
import Top from '@views/discover/recommend/songlist/Top'
import VillageMusic from '@views/discover/recommend/songlist/VillageMusic'
import { Tab, Tabs } from 'vant'
export default {
	components: {
		NavBar,
		SongRec,
		VillageMusic,
		Top,
		Popular,
		Official,
		LightMusic,
		Electronics,
		Chinese,
		[Tab.name]: Tab,
		[Tabs.name]: Tabs
	},
	name: 'Songlist',
	data() {
		return {
			active: 0
		}
	}
}
</script>

<style scoped lang="less">
.head {
	position: sticky;
	top: 0;
	z-index: 10;
	background-color: white;
}
.van-sticky .van-sticky--fixed {
	top: 49px !important;
}
</style>
