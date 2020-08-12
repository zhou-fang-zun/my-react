//饼图
import React,{ Component } from 'react'
//引入echarts
import echarts from 'echarts'

export default class Pie extends Component {
	componentDidMount(){
		const myChart = echarts.init(document.getElementById('main2'))
		let data = [
			{
				value: '3661',
				name: '三角函数的图像与性质'
			},
			{
				value: '5713',
				name: '空间向量及其运算'
			},
			{
				value: '4563',
				name: '直线与圆锥曲线的位置关系'
			},
			{
				value: '9938',
				name: '复数代数形式的四则运算'
			},
			{
				value: '17623',
				name: '集合'
			},
			{
				value: '3299',
				name: '公式的联系'
			},
		];
		let legendData = [{
					name: '三角函数的图象与性质',
					//强制设置图形为圆。
					icon: 'circle'
				},{
					name: '空间向量及其运算',
					//强制设置图形为圆。
					icon: 'circle'
				},{
					name: '直线与圆锥曲线的位置关系',
					//强制设置图形为圆。
					icon: 'circle'
				},{
					name: '复数代数形式的四则运算',
					//强制设置图形为圆。
					icon: 'circle'
				},{
					name: '集合',
					//强制设置图形为圆。
					icon: 'circle'
				},{
					name: '公式的联系',
					//强制设置图形为圆。
					icon: 'circle'
				}]
		const option = {
			//图表标题
			title: {
				text: '三角函数',
				x: 'cneter',
				y: '38%',
				textStyle: {
					fontWeight: 'bold',
					fontSize: 16
				}
			},
			//提示
			tooltip: {
				show: true,
				trigger: 'item',
				formatter: "{b}: {c} ({d}%)"
			},
			//描述 图例组件包括颜色、朝向、位置等
			legend: {
				//布局朝向
				orient: 'horizontal',
				top: '74%',
				data: legendData
			},
			//系列列表，包括列表类型、颜色、数据等
			series: [
				{
					type: 'pie',
					//选中模式，单选或者多项，当前单选
					selectedMode: 'single',
					center: ['50%','40%'], //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
					radius: ['36%','58%'], //饼图的半径，数组的第一项是内半径，第二项是外半径。
					color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67','#FF10AA'],
					//标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 
					//是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。
					symbolOffset: [0, 120],
					label: {
						normal: {
							position: 'outside',
							formatter: '{d}%',
							textStyle: {
								color: '#999999',
								fontWeight: 'bold',
								fontSize: 14
							}
						},
						//高亮的扇区和标签样式。
						emphasis: {
							itemStyle: {
								color: '#57B3FE',
							}
						},
						//标签的视觉引导线样式
						labelLine: {
							normal: {
								show: false
							}
						}
					},
					data: data
				}
			]
		}
		myChart.setOption(option)
		myChart.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: 0,
		})
	}
	
	render(){
		return <div id="main2" style={{width:'600px',height:'400px'}}></div>
	}
}