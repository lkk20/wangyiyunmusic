<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<svg class="icon" aria-hidden="true" @click="$router.go(-1)">
					<use xlink:href="#iconzuojiantou"></use>
				</svg>
			</template>
			<template v-slot:middle>
				<div class="search">
					<input
						type="text"
						autofocus
						placeholder="陈奕迅"
						v-model="keyword"
						@input="search"
					/>
				</div>
			</template>
			<template v-slot:right>
				<svg
					class="icon"
					aria-hidden="true"
					@click="$router.push('/classification')"
				>
					<use xlink:href="#iconwode"></use>
				</svg>
			</template>
		</nav-bar>
		<article class="hot" v-show="!keyword">
			<span>热搜列表</span>
			<ul class="nav">
				<li
					v-for="(item, index) in defaultInfo"
					:key="index"
					@click="showPopup(item.id, item.rtype)"
				>
					{{ item.first }}
				</li>
			</ul>
		</article>
		<article class="hot" v-show="keyword">
			<span>搜索列表</span>
			<ul class="nav">
				<li
					v-for="(item, index) in result"
					:key="index"
					@click="showPopup(item.id, item.rtype)"
				>
					{{ item.name }}
				</li>
			</ul>
		</article>
		<van-popup
			v-model="show"
			closeable
			position="bottom"
			:style="{ height: '95%' }"
			><router-view></router-view
		></van-popup>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
import { Popup } from 'vant'
export default {
	name: 'Search',
	components: { NavBar, [Popup.name]: Popup },
	data() {
		return {
			defaultInfo: [],
			keyword: null,
			result: null,
			show: false
		}
	},
	methods: {
		async defaultSearch() {
			let defaultInfo = await this.$http.get('/search/hot')
			if (defaultInfo.code !== 200) {
				this.$toast.fail('加载失败')
			} else {
				this.defaultInfo = defaultInfo.result.hots
			}
		},
		async search() {
			let result = await this.$http.get(
				`/search?keywords=${this.keyword}&limit=10`
			)
			if (result.code !== 200) {
				this.$toast.fail('搜索失败')
			} else {
				this.result = result.result.songs
			}
		},
		//弹出搜索结果
		showPopup(id, type) {
			this.$router.replace(`/result?id=${id}&type=${type}`)
			this.show = true
		}
	},
	created() {
		this.defaultSearch()
	}
}
</script>

<style scoped lang="less">
.search {
	padding: 0 20px;
	height: 100%;
	input {
		outline: none;
		border: none;
		border-bottom: 1px solid gray;
		height: 80%;
		width: 100%;
	}
}
.hot {
	margin: 20px 80px;
	ul {
		margin-top: 30px;
		li {
			color: gray;
			margin-top: 10px;
		}
	}
}
</style>
