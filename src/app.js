import React,{ Component } from 'react'
import { BrowserRouter,HashRouter,Route,Switch } from 'react-router-dom'

import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'

/* 应用的根组件 */
export default class App extends Component{
	
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={ Login }/>
					<Route path="/" component={ Admin }/>
				</Switch>
			</BrowserRouter>
		)
	}
}