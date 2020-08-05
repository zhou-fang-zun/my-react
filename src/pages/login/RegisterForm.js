import React,{ Component, Fragment } from 'react'

import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//api
import { postReg } from '../../api/login'
export default class RegisterForm extends Component {
	handleClick = () => {
		this.props.switchForm('login')
	}
	onFinishReg = (values) => {
		postReg(values).then(res => {
			if(res.success){
				message.success(res.msg)
			}
		})
	}
	
	render(){
		return (
			<Fragment>
				<div className="login-content-right-way">
					<span>注册</span>
					<span onClick={this.handleClick}>去登录</span>
				</div>
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
							  pattern: /^[a-zA-Z0-9_@.]+$/,
							  message: '用户名必须是邮箱形式',
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
				    <Button  type="primary" htmlType="submit" block>
				      注册
				    </Button>
				  </Form.Item>
				</Form>
			</Fragment>
		)
	}
}