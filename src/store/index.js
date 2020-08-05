import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	strict: true,
	state: {
		info: []
	},
	mutations: {
		// 更改数据
		changeInfo(state, info) {
			state.info = info
		}
	}
})
export default store
