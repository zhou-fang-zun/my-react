//多类图切换保存，用到toolbox工具箱
import React,{ Component } from 'react'
//引入echarts
import echarts from 'echarts'

export default class SwitchType extends Component {
	componentDidMount(){
		const myChart = echarts.init(document.getElementById('main3'))
		const option = {
			//图表标题
			title: {
				text: '个人总分较班级/年级',
				left: 'center'
			},
			//提示
			tooltip: {
				formatter: function(params){
					return `${params.name }<br/>分数:${params.value}`
				}
			},
			//图表描述 图例组件包括颜色、朝向、位置等
			legend: {
				top: 30,
				right: 120,
				bottom: 30,
				data: ['我','年级','班级']
			},
			toolbox: {
				//各工具配置项，也可以自定义工具按钮，详情参考文档
				feature:{
					dataView: { show:true, readOnly:true }, //数据类型
					magicType: { show:true, type:['line','bar']}, //图标类型切换
					restore: { show:true }, //还原
					saveAsImage: { show:true } //保存为图片
				}
			},
			//直角坐标系中x轴需要配置的
			xAxis: {
				type: 'category',
				data: ['最高分', '最低分', '平均分']
			},
			//直角坐标系中y轴需要配置的
			yAxis: {
				type: 'value'
			},
			//系列列表，包括列表类型、颜色、数据等
			series: [
				{
					name: '我',
					type: 'bar',
					barWidth: '10%',
					itemStyle: {
						normal: {
							show: true,
							color:
							new echarts.graphic.LinearGradient(0,0,0,1,[{
								offset: 0,
								color: '#FFCFCF'
							},{
								offset: 1,
								color: '#F05353'
							}])
						}
					},
					data: [2,0,4,9,7,0]
				},
				{
					name: '年级',
					type: 'bar',
					barWidth: '10%',
					itemStyle: {
						normal: {
							show: true,
							color:
							new echarts.graphic.LinearGradient(0,0,0,1,[{
								offset: 0,
								color: '#1FE5BA'
							},{
								offset: 1,
								color: '#18D0CE'
							}])
						}
					},
					data: [2,6,5,9,9,0]
				},
				{
					name: '班级',
					type: 'bar',
					barWidth: '10%',
					itemStyle: {
						normal: {
							show: true,
							color:
							new echarts.graphic.LinearGradient(0,0,0,1,[{
								offset: 0,
								color: '#909DD4'
							},{
								offset: 1,
								color: '#9E88D3'
							}])
						}
					},
					data: [2,6,5,9,9,0]
				},
			]
		}
		myChart.setOption(option)
	}
	
	render(){
		return <div id="main3" style={{width:'600px',height:'400px'}}></div>
	}
}
