<template>
	<view class="home">
		<!-- 自定义组件 -->
		<navbar></navbar>
		<tab :list="tabList" :tabIndex="tabIndex" @tab="tab" />
		<view class="home-list">
			<list :tab="tabList" :activeIndex="activeIndex" @change="change"></list>
		</view>
	</view>
</template>

<script>
	//easyCom components/组件/组件名.vue 局部引用
	// import navbar from '@/components/navbar/navbar.vue'
	export default {
		// components:{
		// 	navbar
		// },
		data() {
			return {
				tabList: [],
				tabIndex:0,
				activeIndex:0
			}
		},
		onLoad() {
			this.getLabel()
		},
		onShow() {

		},
		methods: {
			change(current){
				this.tabIndex = current
				// console.log(current)
			},
			tab(data, index) {
				this.activeIndex = data.index
			},
			getLabel() {
				//调用云函数
				this.$api.get_label({
					name: 'get_label'
				}).then(res => {
					console.log(res)
					const {
						data
					} = res
					this.tabList = data
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		display: flex;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.home-list{
			flex: 1;
			box-sizing: border-box;
		}
	}

</style>
