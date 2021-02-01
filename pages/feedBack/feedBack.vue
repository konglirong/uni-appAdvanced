<template>
	<view>
		<view class="feedback-title">
			意见反馈：
		</view>
		<view class="feedback-content">
			<textarea class="feedback-text" value="" placeholder="请输入您要反馈的问题" />
		</view>
		<view class="feedback-title">
			反馈图片：
		</view>
		<view class="feedback-image-box">
			<view class="feedback-image-item">
				<view class="image-box">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="feedback-image-item">
				<view class="image-box">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="feedback-image-item">
				<view class="image-box">
					<image src="../../static/logo.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.feedback-title{
		font-size: 14px;
		margin: 15px;
		margin-bottom: 0;
		color: #666;
	}
	.feedback-content{
		margin: 15px;
		padding: 10px;
		box-sizing: border-box;
		border: 1px solid #eee;
		.feedback-text{
			font-size: 12px;
			width: 100%;
			height: 100px;
		}
	}
	.feedback-image-box{
		display: flex;
		flex-wrap: wrap;
		padding: 10px;
		.feedback-image-item{
			width: 33.33%;
			position: relative;
			height: 0;
			padding-top: 33.33%;
			box-sizing: border-box;
			 
			.image-box{
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: absolute;
				top:5px;
				right: 5px;
				left:5px;
				border:1px #eee solid;
				border-radius: 5px;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
