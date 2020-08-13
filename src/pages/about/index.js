import React,{ Component } from 'react'
//import * as XLSX from 'xlsx'

import { Button } from 'antd';
//子组件
import TableComponet from '../../components/Table/index.js'

export default class About extends Component {
	state = {
		
	}
	
	handleTest = () => {
		var url =  "http://localhost:8009/excel/download/excel";
		window.location = url;//这里不能使用get方法跳转，否则下载不成功
	}
	
	render(){
		return (
			<div>
				<h1>测试</h1>
				<div>
					<form action="/excel/upload_excel" method="post" enctype="multipart/form-data">
						<input type="file" name="inputFile" />
						<input type="submit" />
					</form> 
				</div>
				<div>
					<Button onClick={this.handleTest}>测试</Button>
				</div>
				<TableComponet></TableComponet>
			</div>
		)
	}
}