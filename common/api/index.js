// import {get_label} from './list.js'

// export default{
// 	get_label
// }


// 批量处理文件
const requireApi = require.context(
	//api  目录的相对路径
	'.',
	// 是否查询子目录
	false,
	//查询文件的一个后缀
	/.js$/
)

let module = {};
requireApi.keys().forEach((key,index)=>{
	console.log(key);
	if(key === './index.js') return 
	Object.assign(module,requireApi(key))
})
console.log(module)
export default module
