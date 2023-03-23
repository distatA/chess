<template>
	<view>
		<view class="u-page">
			<view class="userWrap p_all30"
				:style="{background: 'url(' +`/static/icons/userBg.png`+  ') center / 100% 100% no-repeat'}">
				<u-navbar :is-back="false" title="个人中心" :border-bottom="false" :background="{
					backgroundColor: 'rgba(255, 245, 245,'+ headInfo.opacity +')'
				}" title-color="#333333">
				</u-navbar>
				<view class="flex a_i_c j_c_bt">
					<u-avatar :src="src" size="127"></u-avatar>
					<view class="flex1 flex  j_c_bt f_d_c m_l47 m_r20" style="min-height: 100rpx;">
						<view class="color_3 fs_36 u-line-1">
							User578
						</view>
						<view class="color_6 fs_26">
							ID:2278603
						</view>
					</view>
					<view class="flex a_i_c j_c_c fs_24"
						style="color: #FD6F4D;width: 153rpx;height: 50rpx;background: #FFE9CD;border-radius: 23rpx;">
						账户设置
					</view>
				</view>
				<view class="flex a_i_c j_c_sa m_t56">
					<view class="flex1 textc">
						<view class="color_3 fs_40">
							53.6
						</view>
						<view class="m_t23 color_6 fs_26">
							我的卡包
						</view>
					</view>
					<view class="flex1 textc">
						<view class="color_3 fs_40">
							53.6
						</view>
						<view class="m_t23 color_6 fs_26">
							我的几份
						</view>
					</view>
					<view class="flex1 textc">
						<view class="color_3 fs_40">
							10
						</view>
						<view class="m_t23 color_6 fs_26">
							商品订单
						</view>
					</view>
				</view>
				<view class="m_t39 p_all30 fs_24" style="min-height: 200rpx;color: #7D361D;"
					:style="{background: 'url(' +`/static/icons/cardBg.png`+  ') center / 100% 100% no-repeat'}">
					<view class="flex a_i_c j_c_bt">
						<view class="fs_30"
							style="background: linear-gradient(45deg, #7D361D 1.806640625%, #C88E6B 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">
							青铜鸭
						</view>
						<view class="">
							会员权益
							<u-icon name="arrow-right" color="#7d361d" size="24" style="margin-left: 13rpx;"></u-icon>
						</view>
					</view>
					<view class="m_t22 m_b16 flex a_i_c j_c_bt">
						<view class="">
							50成长值
						</view>
						<view class="">
							白银鸭
						</view>
					</view>
					<u-line-progress active-color="#F99236" :percent="70" height="14" striped-active
						:show-percent="false"></u-line-progress>
					<view class="m_t19 fs_20">
						距离下一个等级只差200成长值
					</view>
				</view>
			</view>
			<view class="content"> 
				<image src="@/static/icons/userActive.png" style="width: 100%;height: 207rpx;"></image>
				<view class="m_t23" style="border-radius: 20rpx;padding: 0 36rpx;background-color: #FFF;">
					<view class="fs_30 color_3 p_t50 p_b20">
						我的工具
					</view>
					<view class="flex a_i_c j_c_bt p_col40" style="border-bottom: 1rpx solid #F4F4F4;" v-for="(item,index) in propsArr">
						<image :src="`../../static/icons/props${index + 1}.png`" style="width: 30rpx;height: 30rpx;"></image>
						<view class="flex1 m_row30 color_3 fs_30" >
							{{item}}
						</view>
						<u-icon name="arrow-right" color="#999999" size="24" style="margin-left: 13rpx;"></u-icon>
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
				current: 4,
				headInfo: {
					opacity: 0
				},
				scr: '',
				propsArr:['团购验券','分享奖励','WIFI连接','常见问题','联系商家',]
			}
		},
		methods: {
			beforeSwitch(index) {
				if (index === 4) return
				this.navigateTo(['/pages/index/index', '/pages/recharge/recharge', '/pages/msg/msg', '/pages/order/order',
					'/pages/user/user'
				][index])
			},
			//页面被滚动
			onPageScroll({
				scrollTop
			}) {
				if (scrollTop <= 450) {
					let num = scrollTop / 450;
					this.headInfo.opacity = num;
				} else if (scrollTop > 450) {
					this.headInfo.opacity = 1;
				}
			},
		}
	}
</script>
<style scoped lang="scss">
	.userWrap {
		min-height: 680rpx;
	}

	.container {
		background-color: #f5f9ff;
	}
	.content{
		padding: 22rpx 30rpx;
		padding-top: 0;
	}
</style>
