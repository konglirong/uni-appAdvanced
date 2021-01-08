'use strict';
//获取数据库
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id
	} = event
	
	let userinfo = await db.collection('user').doc(user_id).get()
	userinfo = userinfo.data[0]
	// label_ids = ['label_id']
	 // let lebal = await db.collection('label').get()
	 
	 let label = await db.collection('label')
	 .aggregate()
	 .addFields({
		 current:$.in(['$_id',$.ifNull([userinfo.label_ids,[]])])
	 })
	 .end()
	//返回数据给客户端
	return {
		code:200,
		msg:'数据请求成功',
		data:label.data
	}
};
