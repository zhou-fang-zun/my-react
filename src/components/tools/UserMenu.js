import React,{ Component, Fragment } from 'react'

import { Menu, Dropdown, Button, Avatar } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
const { Item } = Menu

class UserMenu extends Component{
	
	renderMenu = () => {
		return (
			<Menu className="menus">
				<Item>
					<LogoutOutlined />
					退出登录
				</Item>
			</Menu>
		)
	}
	
	render(){
		return (
			<Fragment>
				<Dropdown className="user-menu" overlay={ this.renderMenu }>
					<span style={{background:'white'}}>admin</span>
				</Dropdown>
			</Fragment>
		)
	}
}

export default UserMenu
