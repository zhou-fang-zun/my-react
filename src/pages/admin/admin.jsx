import React,{ Component } from 'react'

import { Layout } from 'antd'
import SideMenu from './sideMenu'
import TopHeader from './topheader'
import MainContent from './mainContent';
import './admin.css'

const { Header, Content, Sider, Footer }  = Layout;
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
				<Sider width="250px" className="admin-sider">
					<SideMenu/>
				</Sider>
				<Layout>
					<Header className="layout-header"><TopHeader></TopHeader></Header>
					<Content className="layout-main">
						<MainContent/>
					</Content>
					<Footer className="admin-footer">React项目-后台管理系统</Footer>
				</Layout>
			</Layout>
		)
	}
}