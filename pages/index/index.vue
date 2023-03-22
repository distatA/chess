<template>
	<view>
		<view class="container">
			<view class="ad" :style="{background: 'url(' +`/static/icons/ad.png`+  ') center / 100% 100% no-repeat'}">
				<image src="@/static/icons/logo.png" class="ad-logo"></image>
			</view>
			<view class="mode flex a_i_c">
				<view class="mode-left m_r20 flex1">
					<view class="mode-left-top m_b20 textc p_col38 p_row26"
						:style="{background: 'url(' +`/static/icons/mode1.png`+  ') center / 100% 100% no-repeat'}">
						<view class="">
							约上好友，欢乐开台
						</view>
						<view class="flex a_i_c"
							style="margin: 33rpx auto;width: 190rpx;height: 60rpx;background: #FFFFFF;border-radius: 30rpx;justify-content: space-evenly;">
							<text style="font-size: 26rpx;color: #E96A76;">立即预约</text>
							<image src="@/static/icons/play_tag.png" style="width: 30rpx;height: 30rpx;"></image>
						</view>
					</view>
					<view class="mode-left-bottom textl flex a_i_c  p_row26"
						:style="{background: 'url(' +`/static/icons/mode2.png`+  ') center / 100% 100% no-repeat'}">
						<view class="">
							使用须知
						</view>
					</view>
				</view>
				<view class="mode-right flex1">
					<view class="mode-right-top m_b20  textl"
						:style="{background: 'url(' +`/static/icons/mode3.png`+  ') center / 100% 100% no-repeat'}">
						<view class="">
							门店导航
						</view>
						<view class="fs_22 m_t21">
							快速寻找附近门店
						</view>
					</view>
					<view class="mode-right-bottom "
						:style="{background: 'url(' +`/static/icons/mode4.png`+  ') center / 100% 100% no-repeat'}">
						<view class="">
							美团验券
						</view> 
						<view class="fs_22 m_t21">
							使用美团优惠平台
						</view>
						<view class="flex a_i_c m_t33"
							style="width: 190rpx;height: 60rpx;background: #FFFFFF;border-radius: 30rpx;justify-content: space-evenly;">
							<text style="font-size: 26rpx;color: #E96A76;">立即前往</text>
							<image src="@/static/icons/play_tag.png" style="width: 30rpx;height: 30rpx;"></image>
						</view>
					</view>
				</view>
			</view>








		</view>
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
				current: 0
			}
		},
		methods: {
			beforeSwitch(index) {
				console.log(index);
				if (index === 0) return
				this.navigateTo(['/pages/index/index', '/pages/recharge/recharge', '/pages/msg/msg', '/pages/order/order',
					'/pages/index/index'
				][index])
			}
		}
	}
</script>
<style scoped lang="scss">
	.container {
		min-height: 100vh;
		background-color: #f5f9ff;

		.ad {
			width: 100%;
			height: 637rpx;
			position: relative;

			&-logo {
				position: absolute;
				top: 88rpx;
				left: 60rpx;
				width: 98rpx;
				height: 117rpx;
			}
		}

		.mode {
			padding: 40rpx 30rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 800;
			color: #E96A76;

			&-left {
				&-top {
					height: 430rpx;
				}

				&-bottom {
					height: 140rpx;
				}
			}

			&-right {
				&-top {
					height: 220rpx;
					padding: 38rpx 26rpx;
				}

				&-bottom {
					height: 350rpx;
					padding: 40rpx 26rpx;
				}
			}
		}
	}
</style>