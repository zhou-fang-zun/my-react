import React,{ Component } from 'react'

import { Layout } from 'antd'
import SideMenu from './sideMenu'
import TopHeader from './topheader'
import MainContent from './mainContent';
import './admin.css'

const { Header, Content, Sider, Footer }  = Layout;
export default class Admin extends Component{
	constructor(){
		super()
		this.state = {
			collapsed: false
		}
	}
	componentWillMount(){
		const collapsed = JSON.parse(sessionStorage.getItem('collapsed'))
		this.setState({ collapsed })
	}
	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed
		})
		sessionStorage.setItem('collapsed',this.state.collapsed)
	}
	render(){
		const { collapsed } = this.state
		return (
			<Layout className="admin">
				<Sider collapsed={ collapsed }  width="250px" className="admin-sider">
					<SideMenu/>
				</Sider>
				<Layout>
					<Header className="layout-header"><TopHeader toggle={this.toggleCollapsed} collapsed={ collapsed }></TopHeader></Header>
					<Content className="layout-main">
						<MainContent/>
					</Content>
					<Footer className="admin-footer">React项目-后台管理系统</Footer>
				</Layout>
			</Layout>
		)
	}
}