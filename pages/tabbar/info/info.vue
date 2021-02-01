<template>
	<view>
		<view class="my_header">
			<view class="my_header_bg">
				<image :src="userinfo.avatar" mode="aspectFill"></image>
			</view>
			<view class="my_header_logo">
				<view class="my_header_logo_box">
					<image :src="userinfo.avatar" mode="aspectFill"></image>
				</view>
				<text class="my_header_name">{{userinfo.author_name}}</text>
			</view>
			<view class="my_header_info">
				<view class="my_header_info_box">
					<text class="my_header_info_title">被关注</text>
					<text>{{userinfo.follow_count}}</text>
				</view>
				<view class="my_header_info_box">
					<text class="my_header_info_title">粉丝</text>
					<text>{{userinfo.fans_count}}</text>
				</view>
				<view class="my_header_info_box">
					<text class="my_header_info_title">积分</text>
					<text>{{userinfo.integral_count || 0}}</text>
				</view>
			</view>
		</view>
		<view class="my_content">
			<view class="my_content_list" @click="open">
				<view class="my_content_list_title">
					<uni-icons class="icons" type="contact" size="16" color="#666"></uni-icons>
					<text>我的文章</text>
				</view>
				<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
			</view>
			<view class="my_content_list" @click="feedback">
				<view class="my_content_list_title">
					<uni-icons class="icons" type="help" size="16" color="#666"></uni-icons>
					<text>意见反馈</text>
				</view>
				<uni-icons type="arrowright" size="14" color="#666"></uni-icons>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		data() {
			return {

			}
		},
		computed:{
			...mapState(['userinfo'])
		},
		onLoad() {
			// console.log(this.userinfo)
		},
		onTabItemTap(e) {
			console.log(e)
		},
		onShow() {
			console.log('我的')
		},
		methods: {
			open(){
				uni.navigateTo({
					url:'/pages/my-article/my-article'
				})
			},
			feedback(){
				uni.navigateTo({
					url:'/pages/feedBack/feedBack'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F5F5F5;
	}

	.my_header {
		position: relative;
		padding-bottom: 15px;
		.my_header_bg{
			position: absolute;
			top:0;
			right:0;
			bottom: 0;
			left: 0;
			filter: blur(8px);
			opacity: 0.3;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.my_header_logo {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: 30px;

			.my_header_logo_box {
				width: 60px;
				height: 60px;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.my_header_name {
				margin-top: 15px;
				font-size: 16px;
				font-weight: bold;
			}
		}

		.my_header_info {
			margin-top: 15px;
			display: flex;

			.my_header_info_box {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				font-size: 12px;
				color: #999;

				.my_header_info_title {
					font-size: 14px;
					color: #333;
				}
			}
		}
	}
	.my_content{
		.my_content_list{
			display: flex;
			justify-content: space-between;
			padding: 15px;
			margin-top: 10px;
			background-color: #fff;
			color: #333333;
			font-size: 14px;
			.my_content_list_title{
				display: flex;
				align-items: center;
				.icons{
					margin-right: 5px;
				}
			}
		}
	}
</style>
