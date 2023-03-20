<template>
	<view>
		<view class="u-page">
			<!-- 所有内容的容器 -->
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下 方 -->
		<u-tabbar v-model="current" :list="list" :mid-button="true" icon-size="40" active-color="#BE0000"
			inactive-color="#9395A4" height="120" mid-button-size="105" :border-top="false"
			:before-switch="beforeSwitch"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						iconPath: require("@/static/tabbar/index.png"),
						selectedIconPath: require("@/static/tabbar/index_h.png"),
						text: '首页',
					},
					{
						iconPath: require("@/static/tabbar/recharge.png"),
						selectedIconPath: require("@/static/tabbar/recharge_h.png"),
						text: '充值优惠',
					},
					{
						iconPath: require("@/static/tabbar/msg.png"),
						selectedIconPath: require("@/static/tabbar/msg.png"),
						midButton: true,
					},
					{
						iconPath: require("@/static/tabbar/order.png"),
						selectedIconPath: require("@/static/tabbar/order_h.png"),
						text: '我的订单',
					},
					{
						iconPath: require("@/static/tabbar/user.png"),
						selectedIconPath: require("@/static/tabbar/user_h.png"),
						text: '个人中心',
					},
				],
				current: 2
			}
		},
		methods: {
			beforeSwitch(index) {
				if(index === 2)return
				this.navigateTo(['/pages/index/index', '/pages/recharge/recharge', '/pages/msg/msg', '/pages/order/order',
					'/pages/user/user'
				][index])
			}
		}
	}
</script>
