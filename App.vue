<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import './assets/index.scss';
	
	/* 解决小程序和app滚动条的问题 */
	/* #ifdef MP-WEIXIN || APP-PLUS */
		::-webkit-scrollbar{
		    display: none;
		}
	/* #endif */
	/* 解决H5 的问题 */
	/* #ifdef H5 */
	    uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
	    	/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none
	    }
	/* #endif */
	
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		line-height: 1;
		font-size: 28rpx;
		list-style: none;
		font-family: "Noto Sans SC";
	}
	
	/* #ifdef MP-WEIXIN */
	page {
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}
	/* #endif */
	
	.page {
		min-height: 100vh;
		background-color: #f8f8f8;
	}
	
	button::after{ border: none;}
	
	@for $var from 9 through 40 {
		.u-f-#{ ($var * 2) } {
			font-size: ($var * 2) + rpx;
		}
		
		.u-lh-#{ ($var * 2) } {
			line-height: ($var * 2) + rpx;
		}
	}
	
	.bg {
		&-primary {
			background-color: #1D54BD;
		}
		
		&-blue {
			background-color: #318AFE;
		}
		
		&-grew {
			background-color: #999999
		}
		
		&-white {
			background-color: #fff
		}
		
		&-light {
			background-color: #C7C7C7;
		}
	}
	
	.color {
		&-primary {
			color: #1D54BD;
		}
		
		&-blue {
			color: #318AFE;
		}
		
		&-red {
			color: #ff3333;
		}
		
		&-grew {
			color: #999999
		}
		
		&-white {
			color: #fff
		}
		
		&-light {
			color: #C7C7C7;
		}
		
		&-black {
			color: #222222
		}
	}
	
	.bg-max {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -2;
		height: 660rpx;
		width: 100vw;
		background: linear-gradient(180deg, #1d54bd 0%, #F8F8F8 100%);
	}
	
	.medium {
		font-weight: 500;
	}
	
	.bold {
		font-weight: bold;
	}
	
	.header {
		position: sticky;
		top: 0;
		left: 0;
		z-index: 10070;
		padding-top: var(--status-bar-height);
		padding-left: 32rpx;
		padding-right: 32rpx;
		font-size: 32rpx;
		width: 100vw;
		background-color: #fff;
		
		&-title {
			position: absolute;
			top: var(--status-bar-height);
			left: 50%;
			transform: translateX(-50%);
			line-height: 88rpx;
			font-weight: bold;
		}
	}
	
	.flex {
		display: flex;
		
		&-between {
			@extend .flex;
			justify-content: space-between;
			
			&-center {
				@extend .flex-between;
				align-items: center;
			}
		}
		
		&-around {
			@extend .flex;
			justify-content: space-around;
			
			&-center {
				@extend .flex-around;
				align-items: center;
			}
		}
		
		&-center {
			@extend .flex;
			align-items: center;
			
			&-center {
				@extend .flex-center;
				justify-content: center;
			}
		}
		
		&-baseline {
			@extend .flex;
			align-items: baseline;
		}
	}
	
	.clearflex {
		flex-shrink: 0;
	}
	
	.line-through {
		text-decoration: line-through;
	}
	
	.nowrap {
		white-space: nowrap
	}
	
	.line-1 {
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.line-2 {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
/deep/	.u-tabbar__content__circle__button{
		top:-11rpx !important
	}
</style>
