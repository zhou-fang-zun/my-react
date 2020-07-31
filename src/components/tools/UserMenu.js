import React,{ Component, Fragment } from 'react'

import { Menu, Dropdown, Button, Avatar } from 'antd'
import { LogoutOutlined, UserOutlined, MenuUnfoldOutlined, QuestionCircleOutlined, BellOutlined } from '@ant-design/icons';
const { Item } = Menu

class UserMenu extends Component{
	
	renderMenu = () => {
		return (
			<Menu style={{marginRight:'5px'}}>
				<Item>
					<UserOutlined />
					个人设置
				</Item>
				<Item>
					<MenuUnfoldOutlined />
					密码修改
				</Item>
				<Menu.Divider/>
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
					<span>admin</span>
				</Dropdown>
				<BellOutlined className="notice"/>
				<QuestionCircleOutlined className="tip"/>
			</Fragment>
		)
	}
}

export default UserMenu
