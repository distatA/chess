<template>
	<view>
		<view class="container">
			<u-navbar back-icon-name="question-circle" back-icon-color="#616161" back-icon-size="34" title="我的订单"
				:border-bottom="false">
			</u-navbar>
			<u-dropdown active-color="#d01c1b" inactive-color="#333333" menu-icon-size="22"
				style="background-color: #fff;">
				<u-dropdown-item v-model="value1" title="全部订单" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="默认排序" :options="options2"></u-dropdown-item>
			</u-dropdown>

			<view class="content ">
				<view class=""
					style="min-height: 646rpx;background: #FFFFFF;border-radius: 20rpx;padding: 50rpx 30rpx;">
					<view class="flex a_i_c j_c_bt">
						<view class="flex1 flex a_i_c">
							<view class="fs_30 color_3 u-line-1">
								娱乐包间 秋浦河101
							</view>
							<view class="m_l28 fs_26" style="color: #BE0000;">
								未开始
							</view>
						</view>
						<image src="@/static/icons/share.png" style="margin-left: 15rpx;width: 28rpx;height: 28rpx;">
						</image>
					</view>
					<view class="color_9 fs_24 m_t18 m_b20">
						<text>麻小将（恒大中央广场店） </text>
						<u-icon name="map" color="#999999" size="30" style="margin: 0 7rpx 15rpx 0;"></u-icon>
						<text>查看地图</text>
					</view>
					<view style="min-height: 153rpx;background: #FCFCFC;border-radius: 20rpx;padding: 37rpx 25rpx;">
						<view class="flex a_i_c fs_24  color_9">
							<u-icon name="clock" color="#999999" size="30" style="margin-right:10rpx"></u-icon>
							<text>预约开始时间：</text><text>2023.03.16 (周四）12:20</text>
						</view>
						<view class="flex a_i_c fs_24  color_9 m_t33">
							<u-icon name="clock" color="#999999" size="30" style="margin-right:10rpx"></u-icon>
							<text>预约开始时间：</text><text>2023.03.16 (周四）12:20 </text>
						</view>
					</view>
					<view class="">
						<view class="flex a_i_c  m_t30 fs_26 w_100">
							<view style="width: 130rpx;" class="color_3">支付方式</view>
							<view class="color_6">【微信】支付72元</view>
						</view>
						<view class="flex a_i_c  m_t30 fs_26">
							<view style="width: 130rpx;" class="color_3">订单总额</view>
							<view class="color_6">70元</view>
						</view>
						<view class="flex a_i_c  m_t30 fs_26">
							<view style="width: 130rpx;" class="color_3">下单时间</view>
							<view class="color_6">2023.03.12 17:12</view>
						</view>
					</view>
					<view class="fs_30 color_f flex a_i_c j_c_c m_t47"
						style="height: 94rpx;background: linear-gradient(90deg, #CA1919, #F53636);border-radius: 20rpx;">
						确认到店，开门
					</view>
				</view>
			</view>
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
				current: 3,
				value1: 1,
				value2: 2,
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '价格优先',
						value: 3,
					}
				],
				options2: [{
						label: '去冰',
						value: 1,
					},
					{
						label: '加冰',
						value: 2,
					},
				],
			}
		},
		methods: {
			beforeSwitch(index) {
				if (index === 3) return
				this.navigateTo(['/pages/index/index', '/pages/recharge/recharge', '/pages/msg/msg', '/pages/order/order',
					'/pages/user/user'
				][index])
			}
		}
	}
</script>
<style scoped lang="scss">
	.content {
		padding: 23rpx 25rpx;

	}

	.container {
		min-height: 100vh;
		background-color: #F5F9FF;
	}
</style>
