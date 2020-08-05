import React,{ Component } from 'react'

//使用react-svg模块
import { ReactSVG } from 'react-svg';
import { Button, message, notification } from 'antd'
//api
import { getCodes } from '../../api/login/index.js'
//倒计时
let timer = null;

class Code extends Component {
	constructor(props){
		//初始化的 props
		super(props)
		this.state = {
			username: props.username,
			code_loading: false,
			code_msg: '获取验证码',
			code_disabled: false,
			svgImg: ''
		}
	}
	//生命周期 将要接收父组件传过来的 props
	componentWillReceiveProps({ username }){
		this.setState({ username })
		//这样获取父组件的值可以避免this.props.username去获取,减少少量性能消耗
	}
	//生命周期 组件即将销毁
	componentWillUnmount(){
		//销毁定时器
		clearInterval(timer)
	}
	//获取验证码
	getCode = () => {
		const username = this.state.username
		const str = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		if(!username){
			message.warning('账户不能为空')
			return false
		}
		if(!str.test(username)){
			message.warning('请输入正确的邮箱账户')
			return false
		}
		this.setState({
			code_loading: true,
			code_msg: '发送中'
		})
		getCodes().then(res => {
			if(res.success){
				const { data } = res
				// this.setState({
				// 	svgImg: data
				// })
				notification.open({
					message:`验证码为:${data}`
				})
				console.log(data,'data')
				this.countDown()
			}else{
				this.setState({
					code_loading: false,
					code_msg: '重新获取'
				})
			}
		})
	}
	//倒计时
	countDown = () => {
		let num = 60;
		this.setState({
			code_loading: false,
			code_disabled: true,
			code_msg: `${num}s`
		})
		timer = setInterval(()=>{
			num--;
			if(num <= 0){
				this.setState({
					code_disabled: false,
					code_msg: '重新获取'
				})
				clearInterval(timer)
				return false
			}
			this.setState({
				code_msg: `${num}s`
			})
		},1000)
	}
	
	render(){
		const { code_disabled, code_msg, code_loading, svgImg } = this.state
		if(svgImg != ''){
			return (
				<div id="code">
					
				</div>
			)
		}else{
			return <Button type="danger" disabled={ code_disabled } loading={ code_loading } onClick={ this.getCode } block>{ code_msg }</Button>
		}
	}
}

export default Code