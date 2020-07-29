import React,{ Component } from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

//私有组件方法
import PrivateRouter from './components/privateRouter/index.js'
//组件
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'
/* 应用的根组件 */
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