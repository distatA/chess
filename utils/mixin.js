import {
	baseURL
} from '@/utils/request.js'
import {
	getInfo
} from '@/api/user.js'

let timer = null;

export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					showTop: false,
					baseURL: baseURL,
					barheight: 0,
					navbarBg: 'linear-gradient(180deg, #1D54BD 0%, #1d54bd 100%)'
				}
			},
			onPageScroll(e) {
				this.showTop = e.scrollTop > 100
			},
			methods: {
				getDom(selector) {
					return new Promise(res => {
						const query = uni.createSelectorQuery().in(this);
						query.select(selector).boundingClientRect(data => {
							res(data)
						}).exec();
					})
				},
				// 格式化时间
				formatTime(time) {
					time = +time * 1000
					const d = new Date(time)
					const now = Date.now()

					const diff = (now - d) / 1000

					if (diff < 30) {
						return '刚刚'
					} else if (diff < 3600) {
						// less 1 hour
						return Math.ceil(diff / 60) + '分钟前'
					} else if (diff < 3600 * 24) {
						return Math.ceil(diff / 3600) + '小时前'
					} else if (diff < 3600 * 24 * 2) {
						return '1天前'
					}
					return (
						d.getFullYear() +
						'-' +
						(d.getMonth() +
							1) +
						'-' +
						d.getDate()
					)
				},
				// 更新用户信息
				async updateUserInfo() {
					let res = await getInfo()
					let userInfo = res?.info || {}
					uni.setStorageSync('userInfo', userInfo)
					return userInfo
				},
				callAction(phoneNumber = '') {
					phoneNumber = String(phoneNumber || '')
					uni.makePhoneCall({
						phoneNumber
					});
				},
				navigateTo(url = '', isLogin = false) {
					const pageNum = getCurrentPages()
					if (isLogin && !uni.getStorageSync('token')) {
						this.toast('请注册登录')
						clearTimeout(timer)
						timer = setTimeout(() => {
							this.navigateTo('/pages/first/login/login')
						}, 1000)
						return
					}
					if (url) {
						if (pageNum.length > 9) {
							uni.redirectTo({url})
						} else {
							uni.navigateTo({url})
						}
					}
				},
				redirectTo(url) {
					uni.redirectTo({
						url
					});
				},
				navigateBack(delta = 1) {
					uni.navigateBack({
						delta
					})
				},
				reLaunchTo(url) {
					uni.reLaunch({
						url
					});
				},
				tabTo(url) {
					uni.switchTab({
						url
					});
				},
				toast(title, icon = 'none', fun, time) {
					uni.showToast({
						title,
						mask: true,
						icon,
						duration: time || 1500,
						success: fun
					})
				},
			},
		})
	}
}
