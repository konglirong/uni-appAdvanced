<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//异步请求
			this.$api.get_user({
				user_id: '5fed44270431ca0001ca9692'
			}).then(res => {
				const {
					data
				} = res
				this.$store.dispatch('set_userinfo', data)
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import 'components/gaoyia-parse/parse.css';
</style>
