import React,{ Component, Fragment } from 'react'

import UserMenu from '../../components/tools/UserMenu.js'
import { MenuUnfoldOutlined , MenuFoldOutlined } from '@ant-design/icons';
//子组件
import WriteAnimation from '../../components/tools/WriteAnimation.js'
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
		const content = `欢迎使用react后台管理系统,我对你的爱,包裹在寰宇。
		在初夏,成了晨曦;在花瓣,成了露滴;在夜晚,成了星雨;在书里,成了诗句;在心里,成了甜蜜;我爱你!`
	  return (
	    <Fragment>
				{
					collapsed ? <MenuFoldOutlined onClick={this.toggle}/> : <MenuUnfoldOutlined onClick={this.toggle}/>
				}
				<div style={{width:'800px'}}>
					<WriteAnimation data={ content }></WriteAnimation>
				</div>
				<UserMenu></UserMenu>
	    </Fragment>
	  )
	}
}