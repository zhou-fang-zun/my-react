import React,{ Component } from 'react'
import { Button,message } from 'antd'

export default class App extends Component{
	
	handleClick = ()=>{
		message.info('我捉住你啦！')
	}
	render(){
		return(
			<div>
				<h1>hello,world!</h1>
				<Button type="primary" onClick={ this.handleClick }>Button</Button>
			</div>
		)
	}
}