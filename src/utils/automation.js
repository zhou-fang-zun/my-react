const components = []
const files = require.context('./pages', true, /\.js$/);
files.keys().map(key => {
	if(key.includes('./index/') || key.includes('./login/')){
		return false
	}
	const splitFilesName = key.split('.')
	const jsonObj = {}
	const path = `./index${splitFilesName[1].toLowerCase()}`
	const component = files(key).default
	jsonObj.path = path
	jsonObj.component = component
	components.push(jsonObj)
})

export components