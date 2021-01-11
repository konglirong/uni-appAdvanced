<template>
	<view class="label">
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">
					我的标签
				</view>
				<view class="label-edit" @click="editLabel">
					{{is_edit?'完成':'编辑'}}
				</view>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view v-if="!loading" class="label-content">
				<view class="label-content-item" v-for="(item,index) in labelList" :key="item._id">
					{{item.name}}
					<uni-icons @click="del(index)" v-if="is_edit" class="icons-close" type="clear" size="20" color="red"></uni-icons>
					<view v-if="labelList.length === 0 && !loading" class="no-data">
						当前没有数据
					</view>
				</view>
			</view>
		</view>

		<!-- 推荐 -->
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">
					标签推荐
				</view>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view v-if="!loading" class="label-content">
				<view class="label-content-item" @click="add(index)" v-for="(item,index) in list">
					{{item.name}}
				</view>
				<view v-if="list.length === 0 && !loading" class="no-data">
					当前没有数据
				</view>
			</view>
		</view>
		 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_edit: false,
				labelList: [],
				list: [],
				loading:true
			}
		},
		onLoad() {
			//自定义事件  只能在打开的页面触发
			//this.$emit()   uni.$emit()
			this.getLabel()
		},
		methods: {
			// emit(){
			// 	uni.$emit('labelChange','uni-app')
			// },
			editLabel() {
				// this.is_edit = !this.is_edit
				if(this.is_edit){
					this.is_edit = false
					this.setUpdataLabel(this.labelList)
				}else{
					this.is_edit = true
				}
			},
			getLabel() {
				this.loading = true
				this.$api.get_label({
					type: 'all'
				}).then(res => {
					console.log(res)
					const {
						data
					} = res
					this.labelList = data.filter(item => item.current)
					this.list = data.filter(item => !item.current)
					this.loading = false
				})
			},
			add(index){
				if(!this.is_edit) return
				this.labelList.push(this.list[index])
				this.list.splice(index,1)
			},
			del(index){
				this.list.push(this.labelList[index])
				this.labelList.splice(index,1)
			},
			setUpdataLabel(label){
				let newArrIds = [];
				label.forEach(item=>{
					newArrIds.push(item._id)
				})
				uni.showLoading()
				this.$api.updata_label({
					label:newArrIds
				}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:'更新成功',
						icon:'none'
					})
					uni.$emit('labelChange')
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}

	.label {
		.label-box {
			background-color: #fff;
			margin-bottom: 10px;

			.label-header {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666;
				padding: 10px 15px;
				border: 1px solid #f5f5f5;

				.label-edit {
					color: #30b33a;
					font-weight: bold;
				}
			}

			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;

				.label-content-item {
					padding: 2px 5px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					border: 1px solid #666;
					font-size: 14px;
					color: #666;
					position: relative;

					.icons-close {
						position: absolute;
						top: -8px;
						right: -8px;
						box-sizing: 9;
						background-color: #fff;
						border-radius: 50%;
					}
				}
			}
		}
	}
	.no-data{
		width: 100%;
		text-align: center;
		padding: 50px 0;
		color: #999;
		font-size: 14px;
	}
</style>
