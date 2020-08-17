import { request } from '../request'

export function getDepartmentList(config){
	return request({
		url: '/department/list',
		method: 'get',
		params: config
	})
}

export function postDepartmentAdd(config){
	return request({
		url: '/department/add',
		method: 'post',
		data: config
	})
}