import React,{ Component } from 'react'
import PubSub from 'pubsub-js'

import Form from './form.jsx'
import './login.css'
import logo from './images/logo.png'
/* 登录的路由组件 */
export default class Login extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		PubSub.subscribe('formValues',(msg,data)=>{
			console.log(msg,'msg')
			console.log(data,'data')
		})
	}
	componentWillUnmount(){
		PubSub.unsubscribe('formValues');
	}
	render(){
		return(
			<div className="login">
				<header className="login-header">
					<img src={ logo } alt="logo"/>
					<h1>React项目:后台管理系统</h1>
				</header>
				<section className="login-content">
					<h2>用户登录</h2>
					<Form/>
				</section>
			</div>
		)
	}
}