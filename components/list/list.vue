<template>
	<swiper class="home-swiper">
		<swiper-item class="swiper-item">
			 <list-scroll class="list-scroll">
			 	<list-card mode="base"></list-card>
			 	<list-card mode="image"></list-card>
			 	<list-card mode="column"></list-card>
				<list-card mode="base"></list-card>
				<list-card mode="image"></list-card>
				<list-card mode="column"></list-card>
			 </list-scroll>
		</swiper-item>
		
		<swiper-item class="swiper-item">
			 <list-scroll class="list-scroll">
			 	<list-card mode="base"></list-card>
			 	<list-card mode="image"></list-card>
			 	<list-card mode="column"></list-card>
				<list-card mode="base"></list-card>
				<list-card mode="image"></list-card>
				<list-card mode="column"></list-card>
			 </list-scroll>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.home-swiper {
		height: 100%;
		.swiper-item{
			height: 100%;
			overflow: hidden;
			.list-scroll{
				height: 100%;
			}
		}
	}
</style>
