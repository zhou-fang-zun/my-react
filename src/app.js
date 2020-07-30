import React,{ Component } from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

//私有组件方法
import PrivateRouter from './components/privateRouter/index.js'
//组件
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'
/* 应用的根组件 */

// const components = []
// const files = require.context('./pages', true, /\.js$/); //第一个参数是目录；第二个参数是是否查找子集目录；第三个参数是指定查找的文件
// files.keys().map(key => {
// 	if(key.includes('./index/') || key.includes('./login/')){ return false}
// 	const splitFilesName = key.split('.')
// 	const jsonObj = {}
// 	const path = `./index${splitFilesName[1].toLowerCase()}`
// 	const component = files(key).default
// 	jsonObj.path = path;
// 	jsonObj.component = component;
// 	components.push(jsonObj)
// })


export default class App extends Component{
	
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={ Login }/>
					<PrivateRouter  path="/" component={ Admin }></PrivateRouter>
				</Switch>
			</BrowserRouter>
		)
	}
}