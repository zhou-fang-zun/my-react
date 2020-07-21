import { request } from '../request'

export function postLogin(config){
	return request({
		url:'/admin/login',
		data:config,
		method:'post'
	})
}