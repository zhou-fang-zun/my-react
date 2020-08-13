import cookies from 'js-cookie'

const TOKEN = 'token'

export function setToken (value){
	cookies.set( TOKEN, value, { expires:7 } )
}

export function getToken (){
	return cookies.get( TOKEN )
}