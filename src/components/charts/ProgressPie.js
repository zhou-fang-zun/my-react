//进度图
import React,{ Component } from 'react'
//引入echarts
import echarts from 'echarts'

export default class ProgressPie extends Component {
	componentDidMount(){
		const myChart = echarts.init(document.getElementById('progress'))
		const colorValue = '#08A0E2'
		const option = {
			//图表标题
			title: {
				text: '主观题',
				left: 'center',
				top: '25%',
				textStyle: {
					color: '#333333',
					fontWeight: 'bold'
				}
			},
			//原生图形元素组件
			graphic: [{
				type: 'text',
				left: '45%',
				top: '48%',
				style: {
					text: '4',
					fill: '#08A0E2',
					fontSize: 24
				}
			},{
				type: 'text',
				left: '49%',
				top: '48%',
				style: {
					text: '/12',
					fill: '#999',
					fontSize: 24
				}
			}],
			series: [
				{
					name: '进度条',
					type: 'pie',
					clockWise: true, //饼图的扇区是否是顺时针排布。
					startAngle: 270, //起始角度，支持范围[0, 360]。
					radius: [55,65],
					itemStyle: {
						normal: {
							label: { show:true },
							labelLine: { show:true }
						}
					},
					hoverAnimation: false, //是否开启 hover 在扇区上的放大动画效果
					center: ['50%','50%'], //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
					label: {
						normal: {
							show: false,
							position: 'center'
						}
					},
					data:[{
						value: 4,
						name: '',
						label: {
							normal: { show:false }
						},
						itemStyle: {
							normal: { color:colorValue }
						}
					},{
						value: 8,
						name: '',
						label: {
							normal: { show:false }
						},
						itemStyle: {
							normal: { color:'#E9EDF5' }
						}
					}]
				}
			]
		}
		myChart.setOption(option)
	}
	
	render(){
		return <div id="progress" style={{width:'600px',height:'400px'}}></div>
	}
}