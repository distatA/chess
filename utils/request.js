// import md5 from 'md5'
// const baseURL = "https://yaousenmu.zijieshop.com"
export const baseURL = "https://huamin.zijieshop.com"
// export const baseURL = "http://192.168.0.93"
// https://ol.iaushan.com
let timeout = 24 * 60 * 60 * 1000; //请求时间
export const request = (config) => {
	return new Promise((resolve, reject) => {
		// uni.showNavigationBarLoading();
		// 发起请求前，自动添加请求头，自动带上 token（相当于请求拦截器）
		let token = uni.getStorageSync('token')
		if (token) {
			let source = "developers"
			let appid = 'BZnxsCRy6gvm30oa'
			let timeStamp = parseInt(new Date().getTime() / 1000)
		
			config.header = {
				...config.header, // 稳妥起见，先展开原本的 header，再额外添加 Authorization
				// 'content-type': 'application/x-www-form-urlencoded',
				'content-type': 'application/json',
				'access-token': token,
			}
		}
		uni.request({
			// 将剩余配置展开
			...config,
			// 拼接接口路径
			url: baseURL + config.url,
			timeout,
			// 成功返回数据
			success: (res) => {
				let code = res?.data?.code || -1
				if (code === 200) {
					let _data = res?.data?.data || {}
					let obj = (Array.isArray && Array.isArray(_data)) ? { list: _data } : _data
					resolve({ ...obj, __msg: res?.data?.msg || 'Service Error' })
				} else {
					reject(res)
				}
			},
			// 失败返回
			fail: (err) => {
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				let curRoute = routes[routes.length - 1].route // 获取当前页面路由，也就是最后一个打开的页面路由
				console.log(curRoute)
				if (curRoute.indexOf('pages/other/404/404') == -1) {
					uni.navigateTo({
						url: '/pages/other/404/404'
					})
				}
				// console.log(err, "请求失败")
				reject(err)
			},
			// 请求完成：不管成功失败
			complete: (res) => {
				// uni.hideNavigationBarLoading()
				let code = res?.data?.code
				let msg = res?.data?.msg
				if (res.data) {
					if (code !== 200) {
						uni.showToast({
							title: msg,
							icon: "none",
							duration: 2000,
							mask: true
						})
					}
					if ([401].includes(code)) {
						setTimeout(() => {
							uni.reLaunch({
								url: '/pages/first/login/login'
							})
						}, 1000)
						return false
					} else if (code === 402) {
						setTimeout(() => {
							uni.navigateBack({ delta: 1 })
						}, 1000)
						return false
					} else if (code == 3) {
						// if (config.data) {
						// 	uni.navigateTo({
						// 		url: '/pages/first/login/login?fg_id=' + config.data.fg_id
						// 	})
						// } else {
						// 	uni.navigateTo({
						// 		url: '/pages/first/login/login'
						// 	})
						// }
						return false
					}
				}
			}
		});
	})
}