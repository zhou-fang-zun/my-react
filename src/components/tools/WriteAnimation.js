import React,{ Component } from 'react'
import './WriteAnimation.css'

export default class WriteAnimation extends Component {
	componentDidMount(){
		// [...document.querySelector('p')].forEach(p => {
		// 	p.style.setProperty('--duration',p.offsetWidth / 100 + 's')
		// })
	}
	
	render(){
		const { data } = this.props
		return (
			<div className="contain">
				<p>{data}</p>
			</div>
		)
	}
}