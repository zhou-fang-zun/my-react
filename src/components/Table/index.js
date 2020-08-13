import React,{ Component } from 'react'
import { Table } from 'antd'

import { getListPage } from '../../api/common/index.js'
//url
import requestUrl from '../../api/requestUrl.js'
class TableComponet extends Component {
	constructor(props){
		super(props)
		this.state = {
			pageNumber: 1,
			pageSize: 10,
			keyWork: '',
			data: [],  //数据
			loadingTable: false,
			selectedRowKeys:[]
		}
	}
	componentDidMount(){
		//this.loadData()
	}
	//获取列表数据
	loadData = () => {
		const { pageNumber, pageSize } = this.state;
		const requestData = {
			url: requestUrl[this.props.config.url],
			method: 'post',
			data: {
				pageNumber, pageSize
			}
		}
		getListPage(requestData).then(res => {
			const { data } = res
			if(data){
				this.setState({ data })
			}
			this.setState({ loadingTable: false })
		}).catch(err => {
			this.setState({ loadingTable: false })
		})
	}
	//复选框
	onChangeBox = (selectedRowKeys, selectedRows) => {
		this.setState({
			selectedRowKeys
		})
	}
	
	render(){
		const { columns, datas, checkbox, rowKey } = this.props
		const { loadingTable, selectedRowKeys } = this.state
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onChangeBox
		}
		const config = {
			loading: loadingTable,
			columns,
			dataSource: datas,
			rowSelection: checkbox ? rowSelection : null,
			rowKey: rowKey || 'id'
		}
		return (
			<Table {...config}></Table>
		)
	}
}

export default TableComponet