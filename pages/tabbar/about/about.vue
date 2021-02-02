<template>
	<view class="follow">
		<!-- 导航切换 -->
		<view class="follow-tab">
			<view class="follow-tab_box">
				<view class="follow-tab_item" @click="tab(0)" :class="{active:activeIndex ===0}">
					文章
				</view>
				<view class="follow-tab_item" @click="tab(1)" :class="{active:activeIndex ===1}">
					作者
				</view>
			</view>
		</view>
		<view class="follow_list">
			<swiper class="follow_list_swiper" :current="activeIndex" @change="change">
				<swiper-item>
					<list-scroll>
						<uni-load-more v-if="list.length===0 && !articleShow" iconType="snow" status="loading"></uni-load-more>
						<list-card v-for="(item,index) in list" :key="item._id" types="follow" :item="item"></list-card>
						<view class="no-data" v-if="articleShow">没有收藏文章</view>
					</list-scroll>
				</swiper-item>
				<swiper-item>
					<!-- <view class="swiper-item">作者</view> -->
					<list-scroll>
						<list-author v-for="item in authorList" :key="item.id" :item="item"></list-author>
						<view class="no-data" v-if="followShow">没有关注作者</view>
					</list-scroll>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				list: [],
				authorList: [],
				articleShow: false,
				followShow: false,
			}
		},
		onTabItemTap(e) {
			console.log(e)
		},
		onShow() {
			console.log('关于')
		},
		onLoad() {
			// 自定义页面， $on  只能在打开的页面触发
			uni.$on('update_article', () => {
				console.log('关注页面触发')
				this.getFollow()
			})
			uni.$on('updata_author', () => {
				this.getAuthor()
			})
			this.getFollow()
			this.getAuthor()
		},
		methods: {
			tab(index) {
				this.activeIndex = index
			},
			change(e) {
				const current = e.detail.current
				this.activeIndex = current
			},
			getFollow() {
				this.$api.get_follow().then(res => {
					const {
						data
					} = res
					this.list = data
					this.articleShow = this.list.length === 0 ? true : false
				})
			},
			getAuthor() {
				this.$api.get_author().then(res => {
					const {
						data
					} = res
					this.authorList = data
					console.log(data)
					this.followShow = this.authorList.length === 0 ? true : false
				})
			}

		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.follow {
		// height: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		box-sizing: border-box;

		.follow-tab {
			height: 30px;
			padding: 10px 30px;
			border-bottom: 1px solid #F5F5F5;

			.follow-tab_box {
				display: flex;
				width: 100%;
				height: 100%;
				border-radius: 5px;
				border: 1px solid $base-color;

				.follow-tab_item {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					color: #666;
					font-size: 14px;

					&:first-child {
						border-right: 1px solid $base-color;
					}

					&.active {
						color: $base-color;
					}
				}
			}
		}

		.follow_list {
			flex: 1;

			.follow_list_swiper {
				height: 100%;

				.swiper-item {
					height: 100%;
				}
			}
		}
	}

	.no-data {
		padding: 50px;
		font-size: 14px;
		color: #999;
		text-align: center;
	}
</style>
