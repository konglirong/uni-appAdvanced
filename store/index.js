import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		historyList:uni.getStorageSync("__history")||[]
	},
	mutations:{
		set_historyList(status,history){
			status.historyList = history
		},
		clear_history(status){
			status.historyList = []
		}
	},
	actions:{
		set_history({commit,state},history){
			let list = state.historyList
			list.unshift(history)
			uni.setStorageSync("__history",list)
			commit('set_historyList',list)
		},
		clearHistory({commit}){
			// uni.setStorageSync("__history",[])
			uni.removeStorageSync("__history")
			commit('clear_history')
		}
	}
})
export default store