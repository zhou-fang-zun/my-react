import React,{ Component } from 'react'

import { message } from 'antd';
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm.js'
import './login.css'
import logo from './images/logo.png'
/* 登录的路由组件 */



export default class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			time:'',
			formType: 'login'
		}
	}
	getNowTime = () => {
		const date = new Date()
		this.setState({ time:date.toLocaleTimeString() })
	}
	componentWillMount(){
		setInterval(()=>{
			this.getNowTime()
		}, 1000)
	}
	
	onFinish = values => {
		// let { from } = this.props.location.state || { from: { pathname: "/" } }
		// this.props.history.replace(from.pathname)
	};
	
	onFinishReg = values => {
		console.log('register:', values);
		// postReg(values).then(res => {
		// 	if(res.success){
		// 		message.success(res.msg)
		// 	}else{
		// 		message.success(res.msg)
		// 	}
		// })
	}
	
	switchForm = (value) => {
		this.setState({
			formType: value
		})
	}
	
	render(){
		return(
			<div className="login">
				<header className="login-header">
					<img src={ logo } alt="logo"/>
					<h1>React项目:后台管理系统</h1>
				</header>
				<section className="login-content">
					<div className="login-content-left">
						<span className="login-time">{this.state.time}</span>
						<img src={ logo } alt="logo"/>
					</div>
					<div className="login-content-right">
						<div className="content-component">
							{this.state.formType === 'login' ? <LoginForm switchForm={this.switchForm}/> : <RegisterForm switchForm={this.switchForm}/>}
						</div>
					</div>
				</section>
			</div>
		)
	}
}