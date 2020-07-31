import React,{ Component, Fragment } from 'react'

import UserMenu from '../../components/tools/UserMenu.js'
import { MenuUnfoldOutlined , MenuFoldOutlined } from '@ant-design/icons';
/* 头部组件 */
export default class TopHeader extends Component{
	constructor(props){
		super(props);
		this.state = {
			collapsed: props.collapsed
		}
	}
	componentWillReceiveProps({collapsed}){
		this.setState({ collapsed })
	}
	
	toggle = () => {
		this.props.toggle()
	}
	render() {
		const { collapsed } = this.state
	  return (
	    <Fragment>
				{
					collapsed ? <MenuFoldOutlined onClick={this.toggle}/> : <MenuUnfoldOutlined onClick={this.toggle}/>
				}
				<UserMenu></UserMenu>
	    </Fragment>
	  )
	}
}