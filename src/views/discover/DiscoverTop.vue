<template>
	<div class="top">
		<nav-bar>
			<template v-slot:left>
				<svg class="icon" aria-hidden="true" @click="showPopup">
					<use xlink:href="#icongengduo"></use>
				</svg>
			</template>
			<template v-slot:middle>
				<ul class="tabs">
					<li
						v-for="([key, value], index) in Object.entries(tabsData)"
						:key="index"
						:class="{ active: active === index }"
						@click="changeRouter(`${key}`, index)"
					>
						{{ value }}
					</li>
				</ul>
			</template>
			<template v-slot:right>
				<svg class="icon" aria-hidden="true" @click="$router.push('/search')">
					<use xlink:href="#iconsousuo"></use>
				</svg>
			</template>
		</nav-bar>
		<van-popup
			v-model="show"
			position="left"
			:style="{ height: '100%', width: '70%' }"
			><more></more
		></van-popup>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
import More from '@components/content/More'
import { Popup } from 'vant'
export default {
	name: 'DiscoverTop',
	components: {
		NavBar,
		More,
		[Popup.name]: Popup
	},
	data() {
		return {
			active: 1,
			show: false,
			tabsData: {
				my: '我的',
				discover: '发现',
				village: '云村',
				video: '视频'
			}
		}
	},
	methods: {
		changeRouter(path, index) {
			this.active = index
			this.$router.replace(path)
		},
		showPopup() {
			this.show = true
		}
	}
}
</script>

<style scoped lang="less">
.top {
	user-select: none;
	height: 100%;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 10;
	.tabs {
		padding: 0 1.875rem;
		display: flex;
		justify-content: space-around;
		height: 100%;
		li {
			color: gray;
			height: 100%;
			width: 3.0625rem;
			&:active {
				background-color: rgb(219, 214, 214);
				transition: 0.1s;
				backdrop-filter: blur(100px);
				border-radius: 1.5625rem;
			}
		}
		.active {
			color: black;
			font-size: 1.125rem;
		}
	}
}
</style>
