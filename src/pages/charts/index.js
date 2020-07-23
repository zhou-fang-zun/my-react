import React, { Component } from 'react'

/* 
  图表管理
*/
import { Table } from 'antd'
import ReactExcel from '../../components/excel'

export default class Charts extends Component {
	state={
		dataSource:[],
		columns:[]
	}
	// 处理excel成功
	success=(data,columns)=>{
		this.setState({
			dataSource:data,
			columns:columns
		})
	}
  render() {
    return (
      <div style={{textAlign:'center',margin:20}}>
				<ReactExcel 
					success={this.success}
					processData={this.processData}
					importBtnTxt='点我上传一个excel试试'
					exportBtn={true}
				>
				</ReactExcel>
				<br/>
				<br/>
				<Table dataSource={this.state.dataSource} columns={this.state.columns} ></Table>
			</div>
    )
  }
}
