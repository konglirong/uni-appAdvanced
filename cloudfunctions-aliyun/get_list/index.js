'use strict';
//获取数据库
const db = uniCloud.database();
exports.main = async (event, context) => {
	//获取集合
	const collection = db.collection('user')
	//新增数据
	// let res = await collection.add([
	// 	{
	// 		name:'vue',
	// 		type:'前端'
	// 	},{
	// 		name:'html'
	// 	}
	// ])
	
	//删除数据
	// const res = await collection.doc('5fec68825b74fb00017348cb').remove()
	
	//更新记录 update  set两个方法
	//区别  updata 只能更新存在的数据    set 如果记录存在就更新，不存在就更新
	// const res = await collection.doc('5fed2a715a3a8b0001253ea6').update({
	// 	name:'klrHtml'
	// })
	
	//查找
	//doc  只能用于查询id
	// const res = await collection.doc('5fed2a715a3a8b0001253ea5').get()
	//where
	const res = await collection.where({
		name:event.name
	}).get()
	//event为客户端上传的参数
	 
	console.log(JSON.stringify(res));
	//返回数据给客户端
	return {
		code:200,
		msg:'查询成功',
		data:res.data
	}
};
