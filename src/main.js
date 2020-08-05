import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import http from './network/request'
import '@assets/css/base.css'
//导入vant样式
import 'vant/lib/index.less'
//iconFont
import './assets/iconFont/iconfont'
//轮播图懒加载

import { Lazyload, Toast } from 'vant'
Vue.use(Lazyload).use(Toast)
//
Vue.config.productionTip = false

Vue.prototype.$http = http
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
