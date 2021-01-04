'use strict';
//获取数据库
const db = uniCloud.database()
exports.main = async (event, context) => {
	 let lebal = await db.collection('label').get()
	//返回数据给客户端
	return {
		code:200,
		msg:'数据请求成功',
		data:lebal.data
	}
};
