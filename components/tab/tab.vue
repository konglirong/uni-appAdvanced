<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll_box">
				<view v-for="(item,index) in list" :key="index" class="tab-scroll_item">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
					name:'uni-app'
				},{
					name:'vue'
				},{
					name:'react'
				},{
					name:'java'
				},{
					name:'前端'
				},{
					name:'后端'
				},{
					name:'java'
				},{
					name:'前端'
				},{
					name:'后端'
				}],
			};
		}
	}
</script>

<style lang="scss">
	.tab{
		display: flex;
		background-color: #fff;
		border-bottom: 1px solid #f5f5f5;
		width: 100%;
		box-sizing: border-box;
		.tab-scroll_box{
			display: flex;
			height: 45px;
			align-items: center;
			flex-wrap: nowrap;
			box-sizing: border-box;
			.tab-scroll_item{
				flex-shrink: 0;
				padding: 0 10px;
				color: #333;
				font-size: 14px;
			}
		}
		.tab-icons{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
		}
	}

</style>
