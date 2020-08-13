import React, { Component } from 'react'

/* 
  home
*/
import { Tag, Button, Table, Upload } from 'antd'
import TableComponet from '../../components/Table/index.js'
//xlsx
import XLSX from 'xlsx'

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [
			  {
			    key: '1',
			    name: 'John Brown',
			    age: 32,
			    address: 'New York No. 1 Lake Park',
			    tags: 'nice',
			  },
			  {
			    key: '2',
			    name: 'Jim Green',
			    age: 42,
			    address: 'London No. 1 Lake Park',
			    tags: 'loser',
			  },
			  {
			    key: '3',
			    name: 'Joe Black',
			    age: 32,
			    address: 'Sidney No. 1 Lake Park',
			    tags: 'cool',
			  },
			]
		}
	}
	handleImport = (file) => {
		console.log(file,'file')
		const { data } = this.state
		const { files } = file.target;
		const fileReader = new FileReader();
		fileReader.readAsBinaryString(files[0])
		fileReader.onload = event =>{
			const { result } = event.target;
			const binary = XLSX.read(result, {type:'binary'})
			let temp = []
			for(let sheet in binary.Sheets){
				temp = temp.concat(XLSX.utils.sheet_to_json(binary.Sheets[sheet]))
			}
			const NewData = temp.map(item =>{
				return {
					key: item['key'].toString(),
					name: item['name'],
					age: item['age'],
					address: item['address'],
					tags: item['tags']
				}
			})
			console.log(data.concat(NewData),'NewData')
			this.setState({
				data: data.concat(NewData)
			})
		}
	}
	
  render() {
		const columns = [
		  {
		    title: 'Name',
		    dataIndex: 'name',
		    key: 'name',
		    render: (text) => <Button type="link">{text}</Button >
		  },
		  {
		    title: 'Age',
		    dataIndex: 'age',
		    key: 'age',
		  },
		  {
		    title: 'Address',
		    dataIndex: 'address',
		    key: 'address',
		  },
		  {
		    title: 'Tags',
		    key: 'tags',
		    dataIndex: 'tags'
		  },
		  {
		    title: 'Action',
		    key: 'action',
		    render: (text, record) => (
		      <span>
						<Button type="text">Delete</Button>
		      </span>
		    ),
		  },
		];
    const { data } = this.state
		const checkbox = true
		return (
      <div>
				<h1>home</h1>
				<div>
					<Upload name={'file'} action={'https://www.baidu.com/'} onChange={ this.handleImport } accept='.xlsx, .xls'>
						<Button type="primary" >
							导入
						</Button>
					</Upload>
				</div>
				<div id="print">
					<TableComponet columns={columns} datas={data}></TableComponet>
				</div>
			</div>
    )
  }
}
