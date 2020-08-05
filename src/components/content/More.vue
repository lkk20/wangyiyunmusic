<template>
	<div class="More">
		<div class="top" @click="$router.push('/login')">
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#iconwode"></use>
			</svg>
			请登录
		</div>
		<nav class="nav">
			<ul>
				<li>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#iconpinglun"></use>
						</svg>
					</div>
					<small>我的消息</small>
				</li>
				<li>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#iconwode"></use>
						</svg>
					</div>
					<small>我的好友</small>
				</li>
				<li>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#iconshouye"></use>
						</svg>
					</div>
					<small>个人主页</small>
				</li>
				<li>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icondianzan"></use>
						</svg>
					</div>
					<small>个性装扮</small>
				</li>
			</ul>
		</nav>
		<article class="author"><span>创作者中心</span></article>
		<article class="middle">
			<span>听歌识曲</span>
			<span>演出</span>
			<span>附近的人</span>
		</article>
		<article class="function">
			<span>定时停止播放</span>
			<span>音乐闹钟</span>
			<span>音乐云盘</span>
			<span>青少年模式</span>
			<span>扫一扫</span>
		</article>
		<div class="bottom">
			<span>设置</span>
			<span>退出</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'More',
	data() {
		return {}
	},
	methods: {}
}
</script>

<style scoped lang="less">
.More {
	margin-left: 30px;
	.top {
		margin-top: 20px;
	}
	.nav {
		border-bottom: 1px solid gray;
		margin: 20px 20px 20px 0;
		padding-bottom: 20px;
		ul {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			text-align: center;
		}
	}
	.author {
		margin-top: 20px;
	}
	.middle {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-row-gap: 10px;
		border-bottom: 1px solid gray;
		margin: 20px 20px 20px 0;
		padding-bottom: 20px;
	}
	.function {
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		grid-row-gap: 10px;
		border-bottom: 1px solid gray;
		margin: 20px 20px 20px 0;
		padding-bottom: 20px;
	}
	.bottom {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-top: 200px;
		text-align: center;
	}
}
</style>
