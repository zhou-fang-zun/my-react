import React,{ Component } from 'react'
//import * as XLSX from 'xlsx'

import { message, Button } from 'antd';
//api
import { uploadExcle, download } from '../../api/file/index.js'
//子组件
import TableComponet from '../../components/Table/index.js'

const props = {
	  name: 'file',
		accept: 'multipart/form-data',
		method: 'post',
		name: 'inputFile',
	  action: 'http://localhost:7878/upload/upload_excel',
	  onChange(info) {
	    if (info.file.status !== 'uploading') {
	      console.log(info.file, info.fileList);
	    }
	    if (info.file.status === 'done') {
	      message.success(`${info.file.name} file uploaded successfully`);
	    } else if (info.file.status === 'error') {
	      message.error(`${info.file.name} file upload failed.`);
	    }
	  },
	};

export default class About extends Component {
	state = {
		
	}
	
	
	handleTest = () => {
		// download().then(res => {
		// 	console.log(res,'res')
		// })
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