import $http from '../http.js'
export const get_label = (data) => {
	return $http({
		url:'get_label',
		data
	})
}

export const get_list = (data) => {
	return $http({
		url:'get_list',
		data
	})
}

export const updata_like = (data) => {
	return $http({
		url:'updata_like',
		data
	})
}