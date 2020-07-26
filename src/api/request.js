import axios from 'axios'

//创建axios实例
const service = axios.create({
	/* baseURL: '/', */
	timeout: 6000
})

const err = (error) => {
	if(error.response){
		//const data = error.response
	}
}

// request interceptor
service.interceptors.request.use(config => {
	//config.headers['token'] = 'token'
	return config
},err)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
},err)

export {
	service as request
}