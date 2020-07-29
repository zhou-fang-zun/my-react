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
		icon: <HomeOutlined />
	},
	{
	  path: '/charts',
	  title: '图表',
	  icon: <AreaChartOutlined />,
	},
]