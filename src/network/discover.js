import { request } from './request'
//推荐MV
export function recommendMv() {
	return request({
		url: '/personalized/mv'
	})
}
//推荐歌单
export function recommendSongList(config) {
	return request({
		url: '/personalized',
		params: {
			limit: config
		}
	})
}
// export function getHomeGoods(type,page){
// 	return request({
// 		url:'/home/data',
// 		params:{
// 			type,
// 			page
// 		}
// 	})
// }
