'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command

exports.main = async (event, context) => {
	const {
		user_id,   //用户id
		article_id,   //文章id
		content   //评论内容
	} = event
	
	let user = await db.collection('user').doc(user_id).get()
	//获取用户对象
	user = user.data[0]
	
	let commentObj = {
		comment_id:'',   //评论id
		comment_content:'',   //评论内容
		comment_tiem:'',   //评论时间
		author:{
			
		}
	}
	
	//返回数据给客户端
	return event
};
