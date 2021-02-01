<template>
	<view class="list_author">
		<view class="list_author_image">
			<image :src="item.avatar" mode="aspectFill"></image>
		</view>
		<view class="list_author_content">
			<view class="list_author_content_title">{{item.author_name}}</view>
			<view class="list_author_content_des">
				<view class="list_author_content_des_label">
					{{item.professional}}
				</view>
				<view class="list_author_content_des_info">
					<text>发帖 {{item.article_ids.length}}</text>
					<text>粉丝 {{item.fans_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default(){
					return
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list_author {
		display: flex;
		padding: 10px 0;
		margin: 0 10px;
		border-radius: 5px;
		box-sizing: border-box;
		border-bottom: 1px solid #F5F5F5;
		.list_author_image {
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.list_author_content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;

			.list_author_content_title {
				position: relative;
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: bold;
				line-height: 1.2;
			}

			.list_author_content_des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;

				.list_author_content_des_label {
					color: #666;

				}

				.list_author_content_des_info {
					color: #999;
					line-height: 1.5;

					text:first-child {
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
