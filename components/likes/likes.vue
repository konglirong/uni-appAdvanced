<template>
	<view class="icons" @click.stop="likeTab">
		<uni-icons size="20" color="#f07373" :type="like?'heart-filled':'heart'"></uni-icons>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				like:false
			};
		},
		watch:{
			item(newVal){
				this.like = this.item.is_like
			}
		},
		created() {
			this.like = this.item.is_like
		},
		methods:{
			likeTab(){
				this.like = !this.like
				this.setUpdataLikes()
			},
			setUpdataLikes(){
				uni.showLoading()
				this.$api.updata_like({
					user_id:'5fed44270431ca0001ca9692',
					article_id:this.item._id
				}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icon:'none'
					})
					console.log(res)
				}).catch(()=>{
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style>
	.icons {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		position: absolute;
		right: 0;
		top: 0;
	}
</style>
