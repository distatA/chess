<template>
	<view>
		<u-popup :value="value" z-index="10203" mode="center" width="560" border-radius="20" @close="$emit('input', false)">
			<view style="padding: 40rpx 40rpx 56rpx;">
				<view class="flex-center-center u-f-32 bold">系统提示</view>
				<view style="padding-top: 32rpx;" class="flex-center-center">{{ content }}</view>
				<view style="padding-top: 56rpx;" class="u-f-32 flex-between-center">
					<template v-if="showCancel">
						<view style="height: 92rpx;width: 220rpx; border: 2rpx solid #222; border-radius: 100rpx" class="u-f-32 flex-center-center" @tap="$emit('input', false)">取消</view>
						<view style="height: 92rpx;width: 220rpx; border-radius: 100rpx;" class="u-f-32 flex-center-center color-white bg-primary" @tap="$emit('confirm', confirmAction)">确定</view>
					</template>
					<template v-else>
						<view style="height: 92rpx;width: 500rpx; border-radius: 100rpx;" class="u-f-32 flex-center-center color-white bg-primary" @tap="$emit('confirm', confirmAction)">确定</view>
					</template>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				default: false
			},
			title: {
				default: ''
			},
			content: {
				default: ''
			},
			showCancel: {
				default: true
			}
		},
		methods: {
			confirmAction(fn) {
				if (typeof fn === 'function') {
					fn().then(() => {
						this.$emit('input', false)
					})
				} else {
					this.$emit('confirm')
				}
			}
		}
	}
</script>

<style>
</style>