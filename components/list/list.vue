<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item v-for="(item,index) in tab" :key="index" class="swiper-item">
			<listItem :load="load[index]" @loadmore="loadmore" :list="listCatchData[index]"></listItem>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from './list-item.vue';
	export default {
		components: {
			listItem
		},
		props: {
			tab: {
				type: Array,
				default () {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				list: [],
				listCatchData: {},
				page: 1,
				load: {},
				pageSize: 10
			};
		},
		watch: {
			tab(newVal) {
				if (newVal == 0) return
				this.getList(this.activeIndex)
			}
		},
		created() {
			//tab  还没有赋值
			// this.getList(0)
		},
		methods: {
			loadmore() {
				if (this.load[this.activeIndex].loading === 'noMore') return
				console.log('上拉');
				this.load[this.activeIndex].page++
				this.getList(this.activeIndex)

			},
			change(e) {
				const {
					current
				} = e.detail
				// console.log(e);
				// console.log(this.tab[current].name)
				this.$emit('change', current)
				// 当数据不存在或者长度是0的情况下 才去请求数据
				if (!this.listCatchData[current] || this.listCatchData[current].length == 0) {
					this.getList(current)
				}

			},
			getList(current) {
				if (!this.load[current]) {
					this.load[current] = {
						page: 1,
						loading: 'loading'
					}
				}
				console.log('88'+this.load[current].page)

				this.$api.get_list({
						name: this.tab[current].name,
						page: this.load[current].page,
						pageSize: this.pageSize
					})
					.then(res => {
						console.log(res)
						const {
							data
						} = res
						this.list = data
						if (data.length == 0) {
							let oldLoad = {}
							oldLoad.loading = 'noMore'
							oldList.page = this.load[current].page
							this.$set(this.load, current, oldLoad)
							//强制渲染页面
							this.$forceUpdate()
							return
						}
						let oldList = this.listCatchData[current] || []
						oldList.push(...data)
						// this.listCatchData[current] = data
						//懒加载
						this.$set(this.listCatchData, current, oldList)
					})
			}
		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>
