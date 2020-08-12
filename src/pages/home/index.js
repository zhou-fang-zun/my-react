import React, { Component } from 'react'

/* 
  home
*/
import { Tag, Button, Table } from 'antd'
import TableComponet from '../../components/Table/index.js'

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	handlePrint = () => {
		const newWindow = window.open("打印窗口", "_blank")
		const docStr = document.getElementById('print').innerHTML
		//const docStr = '<div>test</div>'  //需要打印的内容
		newWindow.document.write(docStr)
		const styles = document.createElement("style")
		styles.setAttribute('type', 'text/css') //media="print"
		styles.innerHTML = ''
		newWindow.document.getElementsByTagName('head')[0].appendChild(styles)
		newWindow.print()
		newWindow.close()
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
		    dataIndex: 'tags',
		    render: (tags) => (
		      <span>
		        {tags.map((tag) => {
		          let color = tag.length > 5 ? 'geekblue' : 'green';
		          if (tag === 'loser') {
		            color = 'volcano';
		          }
		          return (
		            <Tag color={color} key={tag}>
		              {tag.toUpperCase()}
		            </Tag>
		          );
		        })}
		      </span>
		    ),
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
		const data = [
		  {
		    key: '1',
		    name: 'John Brown',
		    age: 32,
		    address: 'New York No. 1 Lake Park',
		    tags: ['nice', 'developer'],
		  },
		  {
		    key: '2',
		    name: 'Jim Green',
		    age: 42,
		    address: 'London No. 1 Lake Park',
		    tags: ['loser'],
		  },
		  {
		    key: '3',
		    name: 'Joe Black',
		    age: 32,
		    address: 'Sidney No. 1 Lake Park',
		    tags: ['cool', 'teacher'],
		  },
		];
    
		const checkbox = true
		return (
      <div>
				<h1>home</h1>
				<div>
					<Button type="primary" onClick={ this.handlePrint }>打印</Button>
				</div>
				<div id="print">
					<TableComponet columns={columns} datas={data}></TableComponet>
				</div>
			</div>
    )
  }
}
