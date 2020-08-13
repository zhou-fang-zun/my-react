import React,{ Component } from 'react'

//antd
import { Form, Input, InputNumber, Button, Radio } from 'antd'
const { Item } = Form

export default class DepartmentAdd extends Component {
	constructor(props){
		super(props)
		this.state = {
			formLayout: {
				labelCol: { span:2 },
				wrapperCol: { span:20 }
			},
			loading: false
		}
	}
	onSubmit = (values) => {
		this.setState({ loading:true })
		console.log(values)
	}
	
	render(){
		return (
			<Form ref="form" onFinish={this.onSubmit} initialValues={{ status:true, number:0 }} {...this.state.formLayout}>
				<Item label="部门名称" name="name">
					<Input />
				</Item>
				<Item label="人员数量" name="number">
					<InputNumber min={0} max={100}/>
				</Item>
				<Item label="状态" name="status">
					<Radio.Group>
						<Radio value={true}>启用</Radio>
						<Radio value={false}>禁用</Radio>
					</Radio.Group>
				</Item>
				<Item label="描述" name="content">
					<Input.TextArea></Input.TextArea>
				</Item>
				<Item>
					<Button loading={this.state.loading} type="primary" htmlType="submit">确定</Button>
				</Item>
			</Form>
		)
	}
}