<template>
	<view>
		<view class="container"  :style="{background: tabsCurrent === 2 ? 'url(' +`/static/icons/conversionBg.png`+  ') center / 100% 100% no-repeat' : ''}">
			<!-- 所有内容的容器 -->
			<u-navbar :is-back="false" title=" " :border-bottom="false" :background="{
					backgroundColor: 'transparent'
				}">
				<u-tabs :list="tabsList" :is-scroll="false" :current="tabsCurrent" :bg-color="tabsCurrent === 2 ? 'transparent' : '#FFF'"
					:active-color="tabsCurrent === 2 ? '#FFF' : '#333333'" @change="change" bar-width="45" bar-height="5" gutter="50"
					:inactive-color="tabsCurrent === 2 ? '#FFF' : '#333333'"></u-tabs>
			</u-navbar>
			<view class="content p_all28">
				<view class="card" v-if="!tabsCurrent">
					<view class="card-item m_t20 p_t50 p_l50" style="height: 256rpx;" :style="{background: 'url(' +`/static/icons/card${index + 1}.png`+  ') center / 100% 100% no-repeat',color:!index ? '#758DAE' : index === 1  ? '#D96907': '#FFFFFF'}" v-for="(item,index) in 3" :key="index">
						<view style="font-size: 80rpx;font-weight: bold;">
							500 <text class="fs_48 m_l17">元</text>
						</view>
						<view class="fs_30 m_t10 m_l5">
							到账1500元 
						</view>
					</view>
				</view>
				<view class="conversion p_row46" :style="{background: 'url(' +`/static/icons/conversionCard.png`+  ') center / 100% 100% no-repeat' }" v-else-if="tabsCurrent === 2">
					<view class="flex a_i_c j_c_c" style="padding-top: 120rpx;">
						<image src="@/static/icons/conversionIcon1.png" style="width: 80rpx;height: 80rpx;transform: translateX(10rpx);z-index: 2"></image>
						<image src="@/static/icons/conversionIcon2.png" style="width: 80rpx;height: 80rpx;"></image>
					</view>
					<view class="color_3 fs_30 m_t46 m_b75 textc" style="font-weight: 600;">
						美团、大众点评自助验券
					</view> 
					<view class="flex  a_i_c " style="margin: 0 auto;background: #f5f5f6;border-radius: 10rpx;padding: 10rpx 31rpx;">
							<u-input v-model="value" type="number" style="flex: 1;" placeholder="点击输入卡券兑换码" />
							<image src="@/static/icons/scan.png" style="width: 40rpx;height: 40rpx;margin-left: 15rpx;" mode=""></image>
					</view>
					<view class="flex a_i_c j_c_c color_f fs_32" style="margin: 112rpx auto 0;border-radius: 10rpx;background: #CE1717;height: 88rpx;">
						兑换
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
				current: 1,
				tabsList: [{
					name: '储值卡'
				}, {
					name: '卡券'
				}, {
					name: '兑换',
				}],
				tabsCurrent: 2,
				value:''
			}
		},
		methods: {
			beforeSwitch(index) {
				if (index === 1) return
				this.navigateTo(['/pages/index/index', '/pages/recharge/recharge', '/pages/msg/msg', '/pages/order/order',
					'/pages/user/user'
				][index])
			},
			change(e) {
				console.log(e);
				this.tabsCurrent = e
			}

		}
	}
</script>
<style scoped lang="scss">
	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
		padding: 0 30rpx;

	}
	.container{
		min-height: 100vh;
		background: #FCFCFC;
	}
	.conversion{
		height: 766rpx;
	}
	/deep/ .u-scroll-box {
		width: 50vw;
	}
	/deep/ .u-slot-content{
		padding-left: 28rpx;
	}
	/deep/ .u-tabbar__content__circle__border{
		background-color: transparent;
	}
</style>
