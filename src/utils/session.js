const TOKEN = 'token'

export function setToken(value){
	sessionStorage.setItem(TOKEN,value)
}

export function getToken(){
	return sessionStorage.getItem(TOKEN)
}