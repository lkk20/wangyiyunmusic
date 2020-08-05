<template>
	<div>
		搜索结果
	</div>
</template>

<script>
export default {
	name: 'Result',
	data() {
		return {}
	},
	methods: {
		async showResult() {
			let list = await this.$http.get(`/song/url?id${this.$route.query.id}`)
			console.log(list)
			if (list.code !== 200) {
				this.$toast.fail('加载失败')
			} else {
				// this.list = list.result
			}
		}
	},
	created() {
		this.showResult()
	}
}
</script>

<style scoped lang="less"></style>
