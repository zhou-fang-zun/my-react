import React from 'react'
import {
  HomeOutlined,
  AreaChartOutlined
} from '@ant-design/icons';

export const menus = [
	{
		path: '/',
		title: '首页',
		icon: <HomeOutlined />
	},
	{
		path: '/home',
		title: '工作区',
		icon: <HomeOutlined />,
		children: [
			{
				path: '/home/list',
				title:'工作区',
				icon: ''
			}
		]
	},
	{
	  path: '/charts',
	  title: '图表',
	  icon: <AreaChartOutlined />,
	},
	{
		path: '/test',
		title: '测试',
		icon: <AreaChartOutlined />,
	},
	{
		path: '/department',
		title: '部门管理',
		icon: <AreaChartOutlined />,
		children: [
			{
				path: '/department/list',
				title: '部门列表'
			},
			{
				path: '/department/add',
				title: '部门新增'
			}
		]
	}
]