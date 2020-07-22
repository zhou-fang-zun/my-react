import { request } from '../request'

export function postLogin(config){
	return request({
		url:'/admin/login',
		data:config,
		method:'post'
	})
}

export function postReg(config){
	return request({
		url: '/admin/register',
		data: config,
		method: 'post'
	})
}