import { request } from '../request'

//分页列表
export function getListPage( config ){
	return request({
		url: config.url,
		method: config.method,
		data: config.data
	})
}