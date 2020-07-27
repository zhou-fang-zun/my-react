import React,{ Component } from 'react'

import { Layout } from 'antd'
import SideMenu from './sideMenu'
import TopHeader from './topheader'
import MainContent from './mainContent';
import './admin.css'

const { Header, Sider, Footer }  = Layout;
export default class Admin extends Component{
	state = {
		collapsed: false
	}
	
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed
		})
	}
	render(){
		return (
			<Layout className="admin">
				<Sider><SideMenu/></Sider>
				<Layout>
					<Header><TopHeader></TopHeader></Header>
					<MainContent></MainContent>
					<Footer className="admin-footer">React项目-后台管理系统</Footer>
				</Layout>
			</Layout>
		)
	}
}