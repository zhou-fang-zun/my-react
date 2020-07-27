import React,{ Component } from 'react'

import UserMenu from '../../components/tools/UserMenu.js'
/* 头部组件 */
export default class TopHeader extends Component{
	render() {
	  return (
	    <div className='topHeader'>
	      头部组件
				<UserMenu></UserMenu>
	    </div>
	  )
	}
}