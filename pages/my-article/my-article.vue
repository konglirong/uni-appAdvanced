<template>
	<view>
		<uni-load-more v-if="lists.length ===0" status="loading"></uni-load-more>
		<list-card v-for="item in lists" :key="item.id" :item="item"></list-card>
		<view class="no-data" v-if="articleShow">没有数据</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[],
				articleShow: false
			}
		},
		onLoad() {
			this.getMyArticle()
		},
		methods: {
			getMyArticle(){
				this.$api.get_my_article().then(res=>{
					console.log(res)
					const {data} = res
					this.lists = data
					this.articleShow = this.lists.length === 0 ? true : false
				})
			}
		}
	}
</script>

<style>

</style>
