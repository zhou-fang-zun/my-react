import React,{ Component } from 'react'
import { Table } from 'antd'
import PropTypes from 'prop-types'

export default class STable extends Component {
	constructor(props){
		super(props)
		this.state = {
			loading: false,
			query: {},  //查询条件
			data: [],   //表格中显示的数据
			//分页器的状态
			currentPage: 1,
			pageSize: 10,   
			total: 0    ,//总共多少条数据
			selectedRowKeys:[]
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
	refresh = async () => {
		this.setState({ loading: true})
		
	}
	onSelectChange = (selectedRowKeys ) => {
		this.setState({ selectedRowKeys })
	}
	
	render(){
		const { columns, data  } = this.props
		const { selectedRowKeys, loading } = this.state
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		}
		return (
			<Table
				rowSelection={rowSelection}
				columns={columns}
				dataSource={data}
				loading={loading}
			></Table>
		)
	}
}