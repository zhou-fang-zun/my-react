import React,{ Component, Fragment } from 'react'

//antd
import { Form, Input, Button } from 'antd'
const { Item } = Form

export default class DepartmentList extends Component {
	constructor(props){
		super(props)
		this.state = {
			columns:[
				{ title:'部门名称', dataIndex:'name', key:'name' },
				{ title:'人员数量', dataIndex:'number', key:'number' },
				{ title:'状态', dataIndex:'status', key:'status' },
				{ title:'描述', dataIndex:'content', key:'content' },
			],
			data:[]
		}
	}
	onFinish = (values) => {
		console.log(values)
	}
	render(){
		const { columns, data } = this.state
		return (
			<Fragment>
				<Form layout="inline" onFinish={this.onFinish}>
					<Item label="部门" name="username">
						<Input placeholder="请输入部门名称"></Input>
					</Item>
					<Item shouldUpdate={true}>
						<Button type="primary" htmlType="submit">搜索</Button>
					</Item>
				</Form>
			</Fragment>
		)
	}
}