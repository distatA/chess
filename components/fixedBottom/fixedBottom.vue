<template>
	<view>
		<view :style="{ background }" class="fixed-bottom">
			<slot></slot>
		</view>
		
		<view :style="{ height: height + 'px' }"></view>
	</view>
</template>

<script>
	export default {
		props: {
			background: {
				default: 'rgba(0,0,0,0)'
			}
		},
		data() {
			return {
				height: 0
			}
		},
		mounted() {
			this.$nextTick(() => {
				let timer = setTimeout(() => {
					clearTimeout(timer)
					let query = uni.createSelectorQuery().in(this);
					let dom = query.select('.fixed-bottom')
					dom.fields({ size:true }, (res) => {
						console.log(res)
						this.$set(this, 'height', res && res.height || 0)
					}).exec()
				}, 1000)
			})
		}
	}
</script>

<style scoped lang="scss">
	.fixed-bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10201;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		box-sizing: content-box;
	}
</style>