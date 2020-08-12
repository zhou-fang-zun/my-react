//怀特图
import React,{ Component } from 'react'
//引入echarts
import echarts from 'echarts'

export default class WhiteChart extends Component {
	componentDidMount(){
		const myChart = echarts.init(document.getElementById('WhiteChart'))
		let yAxisMonth = [
			"NL-3A s1 t1 s1 t1 s3","FE-5A","FE-3AC","GX6","FE-S1","FE-7A",
			"KC-1B","KC-2HB(15TD)","KC-2(15TD)","FE-7","FE-3AD","KC-2HB","FE-4KACK-2","NL-3","FE-6"
		]
		let barData = [
			84,78,45,40,33,7,100,5,89,76,42,16,11,5,4
		]
		let selectValue= 100
		let ShowPosition= 'KC-1B'
		const option = {
			title: {
				text: '学生能力分析情况',
				left: 'center'
			},
			legend: null,
			tooltip: {
				trigger: 'axis',
				//坐标轴指示器
				axisPointer: {
					type: 'line', //默认为直线，可选为：'line' | 'shadow'
					lineStyle: {
						color: '#48b',
						width: 2,
						type: 'solid',
						shadowOffsetX: -160,
						shadowColor: '#48b'
					}
				},
				formatter: function(params){
					return params[0].name + "<br/>" + '百分比: ' + params[0].value + '%';
				}
			},
			//绘图网格
			grid: {
				containLabel: true, //防止标签溢出,具体作用看官方文档
				left: '2%',
				right: '10%',
				top: '10%',
				bottom: '5%'
			},
			yAxis: [
				{
					
				}
			]
		}
		myChart.setOption(option)
	}
	
	render(){
		return <div id="WhiteChart" style={{width:'600px',height:'400px'}}></div>
	}
}
