

export  default function $http(options){
	const{
		url,
		data
	} = options
	const dataObj = {
		user_id:'5fed44270431ca0001ca9692',
		...data
	}
	return new Promise((resolve,reject)=>{
		uniCloud.callFunction({
			name: url,
			data:dataObj
		}).then(res=>{
			if (res.result.code == 200) {
				// .then
				resolve(res.result)
			} else {
				// catch
				reject(res.result)
			}
		}).catch((err)=>{
			reject(err)
		})
	})
}