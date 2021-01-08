<template>
	<view @click="open">
		<!-- 基础卡片 -->
		<view v-if="item.mode === 'base'" class="list-card">
			<view class="list-card-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="list-card-content">
				<view class="listcard-content_title">
					<text>
					基础卡片{{item.title}}
					</text>
					<likes :item="item"></likes>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des_label">
						<view class="listcard-content_des_label_item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content_des_browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>



		<!-- 多图模式 -->
		<view v-if="item.mode === 'column'" class="list-card mode-column">
			<view class="list-card-content">
				<view class="listcard-content_title">
					<text>
						多图模式{{item.title}}
					</text>
					<likes :item="item"></likes>
				</view>
				<view class="list-card-image">
					<view class="list_card_img_item" v-if="index < 3" v-for="(item,index) in item.cover" :key="index">
						<image :src="item" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des_label">
						<view class="listcard-content_des_label_item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content_des_browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>

		<!-- 大图模式 -->
		<view v-if="item.mode === 'image'" class="list-card mode-image">
			<view class="list-card-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="list-card-content">
				<view class="listcard-content_title">
					<text>
						大图模式{{item.title}}
					</text>
					<likes :item="item"></likes>
				</view>

				<view class="listcard-content_des">
					<view class="listcard-content_des_label">
						<view class="listcard-content_des_label_item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content_des_browse">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default () {
					return {}
				}
			},
		},
		data() {
			return {

			};
		},
		methods:{
			open(){
				this.$emit('click',this.item)
				console.log('打开详情页面')
			}
		}
	}
</script>

<style lang="scss">
	.list-card {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;

		.list-card-image {
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			flex-shrink: 0;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.list-card-content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 10px;
			width: 100%;

			.listcard-content_title {
				padding-right: 30px;
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;
				position: relative;

				text {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
			}

			.listcard-content_des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;

				.listcard-content_des_label {
					display: flex;

					.listcard-content_des_label_item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $base-color;
						border: 1px $base-color solid;
					}

					.listcard-content_des_browse {
						color: #999;
						line-height: 1.5;
					}
				}
			}

		}

		&.mode-column {
			.list-card-content {
				width: 100%;
				padding-left: 0;
			}

			.list-card-image {
				display: flex;
				margin-top: 10px;
				width: 100%;
				height: 70px;

				.list_card_img_item {
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;

					&:first-child {
						margin-left: 0;
					}

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.listcard-content_des {
				margin-top: 10px;
			}
		}

		&.mode-image {
			flex-direction: column;

			.list-card-image {
				width: 100%;
				height: 100px;
			}

			.list-card-content {
				padding-left: 0;
				margin-top: 10px;
			}

			.listcard-content_des {
				display: flex;
				align-items: center;
				margin-top: 10px;
			}
		}
	}
</style>
