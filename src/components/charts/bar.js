//柱状图
import React,{ Component } from 'react'
//引入echarts
import echarts from 'echarts'

export default class SingleBar extends Component {
	componentDidMount(){
		const myChart = echarts.init(document.getElementById('main'))
		const option = {
			//图表的标题
			title: {
				text: 'echarts入门实例',
				left: 'center',
				subtext: '二级标题'
			},
			//提示
			tooltip: {
				
			},
			//描述 图例组件包括颜色、朝向、位置等
			legend: {
				data: ['销量'],
				bottom: 0,
				formatter: '2020'
			},
			//颜色 放到外面它会随便挑选，也可以放到它对应的series里
			color: ['#6666FF','#990000'],
			//直角坐标系中x轴需要配置的
			xAxis: {
				data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			},
			//直角坐标系中y轴需要配置的
			yAxis: {},
			//系列列表，包括列表类型、颜色、数据等
			series: {
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}
		}
		myChart.setOption(option)
	}
	
	render (){
		return <div id="main" style={{width:'600px',height:'400px'}}></div>
	}
}