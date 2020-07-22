import React,{ Component } from 'react'

import { Form, Input, Button, Tabs, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import logo from './images/logo.png'
import { postLogin, postReg } from '../../api/login'
/* 登录的路由组件 */
const { TabPane } = Tabs;

export default class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			time:''
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
	  console.log('Success:', values);
		// postLogin(values).then(res =>{
		// 	if(res.success){
		// 		console.log(res)
		// 		// 跳转到对应页面 不需要回退用replace
		// 		let { from } = this.props.location.state || { from: { pathname: "/" } }
		// 		this.props.history.replace(from.pathname)
		// 	}
		// })
		let { from } = this.props.location.state || { from: { pathname: "/" } }
		this.props.history.replace(from.pathname)
	};
	
	onFinishReg = values => {
		console.log('register:', values);
		postReg(values).then(res => {
			if(res.success){
				message.success(res.msg)
			}else{
				message.success(res.msg)
			}
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
					</div>
					<div className="login-content-right">
						<Tabs defaultActiveKey="1" centered>
							<TabPane tab="用户登录" key="1">
								<Form
								  name="basic"
								  initialValues={{
								    account: 'admin',
										password: '123456',
								  }}
								  onFinish={this.onFinish}
								>
								  <Form.Item
								    name="account"
										validateFirst='true'
								    rules={[
								      {
								        required: true,
												// validateFirst='true' 校验错误，就不会继续往下校验
												whitespace: true,
								        message: 'Please input your username!',
								      },
											{
											  min: 4,
											  message: '用户名最少4位',
											},
											{
											  max: 12,
											  message: '用户名最多12位',
											},
											{
											  pattern: /^[a-zA-Z0-9_]+$/,
											  message: '用户名必须是英文、数字或下划线组成',
											},
								    ]}
								  >
								    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="account"/>
								  </Form.Item>
								
								  <Form.Item
								    name="password"
								    rules={[
								      {
								        required: true,
												whitespace: true,
								        message: 'Please input your password!',
								      },
								    ]}
								  >
								    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password"/>
								  </Form.Item>
								
								  <Form.Item>
								    <Button className="login-form-button" type="primary" htmlType="submit">
								      登录
								    </Button>
								  </Form.Item>
								</Form>
							</TabPane>
							<TabPane tab="用户注册" key="2">
								<Form
								  name="reg"
									onFinish={this.onFinishReg}
								>
								  <Form.Item
								    name="account"
								    rules={[
								      {
								        required: true,
												whitespace: true,
								        message: 'Please input your username!',
								      },
											{
											  min: 4,
											  message: '用户名最少4位',
											},
											{
											  max: 12,
											  message: '用户名最多12位',
											},
											{
											  pattern: /^[a-zA-Z0-9_]+$/,
											  message: '用户名必须是英文、数字或下划线组成',
											},
								    ]}
								  >
								    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="account"/>
								  </Form.Item>
								
								  <Form.Item
								    name="password"
								    rules={[
								      {
								        required: true,
												whitespace: true,
								        message: 'Please input your password!',
								      },
								    ]}
								  >
								    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password"/>
								  </Form.Item>
								
								  <Form.Item>
								    <Button className="login-form-button" type="primary" htmlType="submit">
								      注册
								    </Button>
								  </Form.Item>
								</Form>
							</TabPane>
						</Tabs>
					</div>
				</section>
			</div>
		)
	}
}