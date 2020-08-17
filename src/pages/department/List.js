import React,{ Component, Fragment } from 'react'

//antd
import { Form, Input, Button, Switch  } from 'antd'
//api
import { getDepartmentList } from '../../api/department'
//组件
import TableComponet from '../../components/Table/index.js'
const { Item } = Form

export default class DepartmentList extends Component {
	constructor(props){
		super(props)
		this.state = {
			columns:[
				{ title:'部门名称', dataIndex:'name', key:'name' },
				{ title:'人员数量', dataIndex:'number', key:'number' },
				{ title:'状态', dataIndex:'status', key:'status',render: (text,rowData) => {
					return <Switch checkedChildren="启用" unCheckedChildren="禁用" defaultChecked={!!text} />
				}},
				{ title:'描述', dataIndex:'note', key:'note' },
			],
			data:[]
		}
	}
	componentDidMount(){
		getDepartmentList().then(res => {
			if(res.success){
				const { data } = res
				console.log(data)
				this.setState({ data })
			}
		})
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
				<TableComponet columns={columns} datas={data}></TableComponet>
			</Fragment>
		)
	}
}