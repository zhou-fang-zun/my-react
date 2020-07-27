import React from 'react'
import {
  HomeOutlined,
  AreaChartOutlined
} from '@ant-design/icons';

export const menus = [
	{
		path: '/home',
		title: '首页',
		icon: <HomeOutlined />
	},
	{
	  path: '/charts',
	  title: '图表',
	  icon: <AreaChartOutlined />,
	},
]