import React,{ Component } from 'react'

import Run from '../../components/Run/index.js'
export default class Index extends Component {
	
	render(){
		return (
			<div className="index-box">
				<h2>欢迎使用react后台系统</h2>
				<Run />
			</div>
		)
	}
}