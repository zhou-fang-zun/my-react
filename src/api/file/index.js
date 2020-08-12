import { request } from '../request'

export function uploadExcle (config){
	return request({
		url: '/excel/upload_excel',
		method: 'post',
		data: config
	})
}

export function download (config){
	return request({
		url: '/excel/download',
		method: 'post',
		data: config
	})
}
