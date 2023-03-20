module.exports = {
	onLoad() {
		// 设置默认的转发参数
		// let routers = getCurrentPages()
		// let cur = routers[routers.length - 1].route
		// let token = 'pages/index/index?token=' + uni.getStorageSync('userInfo').userInfo.token
		// console.log(token, "分享参数");
		let routers = getCurrentPages()
		let cur = routers[routers.length - 1].route
		let curParam = routers[routers.length - 1].options; //获取路由参数
		let param = ''
		for (let key in curParam) {
			param += '&' + key + '=' + curParam[key]
		}
		let token = cur + '?token=' + uni.getStorageSync('userInfo').token +param
		// console.log(token, "分享参数");
		// 设置默认的转发参数
		this.$u.mpShare = {
			title: '飞象健康管家', // 默认为小程序名称
			path: `${token}`, // 默认为当前页面路径
			imageUrl: '/static/images/share_bg.png' // 默认为当前页面的截图
		}
	},
	onShareAppMessage() {
		return this.$u.mpShare
	},
	// #ifdef MP-WEIXIN
	onShareTimeline() {
		return this.$u.mpShare
	}
	// #endif
}
