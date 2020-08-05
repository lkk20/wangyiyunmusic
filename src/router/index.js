import Vue from 'vue'
import VueRouter from 'vue-router'

//加载页面
//404
const notFound = () => import('@views/404.vue')
//登录页面
const Login = () => import('@views/login/Login.vue')
//主页面
const Home = () => import('@views/Home.vue')
const My = () => import('@views/my/My.vue')
const Video = () => import('@views/video/Video.vue')
const Village = () => import('@views/village/Village.vue')
const Discover = () => import('@views/discover/Discover.vue')
//搜索页面
const Search = () => import('@views/search/Search.vue')
const Result = () => import('@views/search/Result.vue')
const Classification = () => import('@views/search/Classification.vue')
//推荐
const Everyday = () => import('@views/discover/recommend/Everyday.vue')
const Songlist = () => import('@views/discover/recommend/Songlist.vue')
const Mv = () => import('@views/discover/recommend/Mv.vue')
const List = () => import('@views/discover/recommend/List.vue')
const Radio = () => import('@views/discover/recommend/Radio.vue')
//歌曲列表
const Playlist = () => import('@views/audioPlay/Playlist.vue')
//播放页面
const Play = () => import('@views/audioPlay/Play.vue')
const MvPlay = () => import('@views/mvplay/MvPlay.vue')
//解决 Navigating to current location
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
	return VueRouterReplace.call(this, to).catch(err => err)
}
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return VueRouterPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

//路由
const routes = [
	{
		path: '/',
		redirect: '/discover'
	},
	//主页
	{
		path: '/home',
		component: Home,
		children: [
			{
				path: '/discover',
				component: Discover
			},
			{
				path: '/my',
				component: My
			},
			{
				path: '/video',
				component: Video
			},
			{
				path: '/village',
				component: Village
			}
		]
	},
	//搜索页
	{
		path: '/search',
		component: Search,
		children: [
			{
				path: '/result/:id?',
				component: Result
			}
		]
	},
	{
		path: '/classification',
		component: Classification
	},
	{
		path: '/everyday',
		component: Everyday
	},
	//推荐
	{
		path: '/songlist',
		component: Songlist
	},
	{
		path: '/mv',
		component: Mv
	},
	{
		path: '/list',
		component: List
	},
	{
		path: '/radio',
		component: Radio
	},
	//歌曲列表
	{
		path: '/playlist/:id?',
		component: Playlist
	},
	//播放页面
	{
		path: '/play/:id?',
		component: Play
	},
	{
		path: '/mvplay/:id?',
		component: MvPlay
	},
	{
		path: '/login',
		component: Login
	},
	// {
	// 	//需登录的页面要设置meta原信息，路由守卫中使用to.meta访问
	// 	path: '/login',
	//   meta:{requireLogin:true},
	// 	component: Login
	// },
	//通配符设置404页面
	{
		path: '*',
		component: notFound
	}
]
const router = new VueRouter({
	routes,
	mode: 'history'
})
//路由守卫
// router.beforeEach((to, from, next) => {
// 	let isLogin = true
// 	if (isLogin || to.path == '/login') {
// 		next()
// 	} else {
// 		next({ path: '/login' })
// 	}
// })
//将router传入到vue实例中
export default router
