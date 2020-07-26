import React,{ Component, Fragment } from 'react'

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default class RegisterForm extends Component {
	handleClick = () => {
		this.props.switchForm('login')
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
				    <Button  type="primary" htmlType="submit" block>
				      注册
				    </Button>
				  </Form.Item>
				</Form>
			</Fragment>
		)
	}
}