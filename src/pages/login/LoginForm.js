import React,{ Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//api
import { postLogin } from '../../api/login'
//组件
import Code from '../../components/code/index.js'
//获取session方法
import { setToken } from '../../utils/cookie.js'

class LoginForm extends Component {
	constructor(){
		super()
		this.state = {
			login_btn: false,
			username: 'admin',
		}
	}
	//登录
	onFinish = values => {
		console.log('Success:', values);
		this.setState({
			login_btn: true
		})
		setToken('1234')
		this.props.history.push('/')
		// postLogin(values).then(res =>{
		// 	if(res.success){
		// 		console.log(res)
		// 		setToken(res.token)
		// 		this.setState({
		// 			login_btn: false
		// 		})
		// 		// 跳转到对应页面 不需要回退用replace
		// 		let { from } = this.props.location.state || { from: { pathname: "/" } }
		// 		this.props.history.replace(from.pathname)
		// 	}else{
		// 		this.setState({
		// 			login_btn: false
		// 		})
		// 		message.warning(res.msg)
		// 	}
		// })
	}
	handleClick = () => {
		this.props.switchForm('register')
	}
	//input 输入处理
	inputChange = (e) => {
		const username = e.target.value
		this.setState({ username })
	}
	
	render(){
		const { username, login_btn } = this.state
		return (
			<Fragment>
				<div className="login-content-right-way">
					<span>登录</span>
					<span onClick={this.handleClick}>账号注册</span>
				</div>
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
							  pattern: /^[a-zA-Z0-9_@.]+$/,
							  message: '用户名必须是英文、数字或下划线组成',
							},
				    ]}
				  >
				    <Input value={username} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="account"/>
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
					
					<Form.Item
						name="code"
						rules={[
							{
								required: true,
								message: '请输入验证码'
							}
						]}
					>
						<Row gutter={13}>
							<Col span={16}>
								<Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="code"/>
							</Col>
							<Col span={8}>
								<Code username={ username }/>
							</Col>
						</Row>
					</Form.Item>
					
				  <Form.Item>
				    <Button loading={ login_btn } className="login-form-button" type="primary" htmlType="submit" block>
				      登录
				    </Button>
				  </Form.Item>
				</Form>
			</Fragment>
		)
	}
}

export default withRouter(LoginForm)