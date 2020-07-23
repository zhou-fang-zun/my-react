import React,{ Component } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'

export default class STable extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading: false
		}
	}
	static propTypes = {
		columns:PropTypes.array.isRequired,
		data:PropTypes.array.isRequired
	}
	//初始化table
	getInit = async (params) => {
		this.setState({
			loading: true
		})
		const data = await this.getInit(params)
		this.setState({
			data: data.result,
			loading: false
		})
	}
	//刷新
	refreshData = async () => {
		
	}
	render(){
		const { columns, data } = this.props
		return (
			<Table
				columns={columns}
				dataSource={data}
			></Table>
		)
	}
}