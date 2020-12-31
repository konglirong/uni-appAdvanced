<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏占位 -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<!-- 导航栏内容 -->
			<view class="navbar-content" :style="{height:navbarHeight+'px',width:windowWidth+'px'}">
				<view class="navbar-search">
					<view class="navbar-search-icon">
						 <!-- <span class="iconfont icon-search"></span> -->
						 <uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search-text">uni-app</view>
				</view>
			</view>
		</view>
		<view :style="{height:statusBarHeight+navbarHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navbarHeight:45,
				windowWidth:375,
			};
		},
		created() {
			//获取状态栏高度
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight
			this.windowWidth = info.windowWidth
			console.log(info)

			// h5 app mp-alipay
			// #ifndef H5|| APP-PLUS || MP-ALIPAY
			//获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo)
			//（胶囊底部高度 - 状态栏的高度）+（胶囊顶部高度 - 状态栏内的高度） = 导航栏的高度
			this.navbarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (
				menuButtonInfo.top - info.statusBarHeight
			)
			this.windowWidth = menuButtonInfo.left
			// #endif 
		},
	}
</script>

<style lang="scss">
	@import '../../common/css/icon.css';
	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $base-color;

			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 45px;
				padding: 0 15px;
				box-sizing: border-box;

				.navbar-search {
					display: flex;
					align-items: center;
					height: 30px;
					background-color: #fff;
					padding: 0 10px;
					width: 100%;
					border-radius: 30px;

					.navbar-search-icon {
						margin-right: 10px;
					}
					.navbar-search-text {
						font-size: 12px;
						color: #999;
					}
				}
			}

		}

	}
</style>
