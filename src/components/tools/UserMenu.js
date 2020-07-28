import React,{ Component } from 'react'

import { Menu, Dropdown, Button, Avatar } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
const { Item } = Menu

class UserMenu extends Component{
	
	renderMenu = () => {
		return (
			<Menu>
				<Item>
					<LogoutOutlined />
					退出登录
				</Item>
			</Menu>
		)
	}
	
	render(){
		return (
			<Dropdown className="user-menu" overlay={ this.renderMenu }>
				<span style={{background:'white'}}>admin</span>
			</Dropdown>
		)
	}
}

export default UserMenu
