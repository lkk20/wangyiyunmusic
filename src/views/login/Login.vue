<template>
	<div>
		<nav-bar>
			<template v-slot:left>
				<svg class="icon" aria-hidden="true" @click="$router.go(-1)">
					<use xlink:href="#iconzuojiantou"></use>
				</svg>
			</template>
			<template v-slot:middle>
				登录
			</template>
			<template v-slot:right>
				<svg class="icon" aria-hidden="true" @click="$router.replace('/home')">
					<use xlink:href="#iconshouye"></use>
				</svg>
			</template>
		</nav-bar>
		<van-tabs v-model="active">
			<van-tab title="手机号登录"
				><van-form @submit="onSubmit">
					<van-field
						v-model="username"
						name="username"
						label="用户名"
						placeholder="用户名"
						:rules="[{ required: true, message: '请填写用户名' }]"
					/>
					<van-field
						v-model="password"
						type="password"
						name="password"
						label="密码"
						placeholder="密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">
							提交
						</van-button>
					</div>
				</van-form></van-tab
			>
			<van-tab title="163邮箱登录"
				><van-form @submit="onSubmit">
					<van-field
						v-model="username"
						type="email"
						name="username"
						label="用户名"
						placeholder="用户名"
						:rules="[{ required: true, message: '请填写用户名' }]"
					/>
					<van-field
						v-model="password"
						type="password"
						name="password"
						label="密码"
						placeholder="密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
					<div style="margin: 16px;">
						<van-button round block type="info" native-type="submit">
							提交
						</van-button>
					</div>
				</van-form></van-tab
			>
		</van-tabs>
	</div>
</template>

<script>
import NavBar from '@components/common/NavBar'
import { Form, Field, Button, Tab, Tabs } from 'vant'
export default {
	components: {
		NavBar,
		[Form.name]: Form,
		[Field.name]: Field,
		[Button.name]: Button,
		[Tab.name]: Tab,
		[Tabs.name]: Tabs
	},
	name: 'Login',
	data() {
		return {
			username: null,
			password: null,
			active: 1
		}
	},
	methods: {
		async onSubmit() {
			let list = await this.$http.post('/login/cellphone', {
				phone: this.username,
				password: this.password
			})
			console.log(list)
		}
	}
}
</script>

<style scoped lang="less"></style>
