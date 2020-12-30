<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onTabItemTap(e) {
			console.log(e)
		},
		onLoad() {

		},
		onShow(){
			console.log('首页')
		},
		methods: {

		}
	}
</script>

<style lang="less">
	@width:200px;
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: @width;
		width: @width;
		margin-top: @width;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}
	}
</style>
