import React, { Component } from 'react'

/* 
  home
*/
import { Tag, Button  } from 'antd'
import STable from '../../components/STable'

export default class Home extends Component {
	
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
    return (
      <div>
				<h1>home</h1>
				<STable columns={columns} data={data}/>
			</div>
    )
  }
}
