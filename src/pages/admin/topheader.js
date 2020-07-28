import React,{ Component, Fragment } from 'react'

import UserMenu from '../../components/tools/UserMenu.js'
/* 头部组件 */
export default class TopHeader extends Component{
	render() {
	  return (
	    <Fragment>
	      头部组件
				<UserMenu></UserMenu>
	    </Fragment>
	  )
	}
}