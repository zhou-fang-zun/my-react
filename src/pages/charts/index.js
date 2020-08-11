import React, { Component } from 'react'

/* 
  图表管理
*/
import echarts from 'echarts'
// 引入饼图
require('echarts/lib/chart/pie');
export default class Charts extends Component {
	state={
		
	}
	
	initCharts = (documents,data) => {
		let myChart = echarts.init(documents);
		myChart.setOption(data)
		return myChart
	}
	componentDidMount(){
		const option = {
			//图标的标题
			title: { text: 'ECharts 入门示例', left: 'center', subtext: '二级标题' },
			//应用的组件
			tooltip: {
				formatter(){
					return '这是一个提示'
				}
			},
			//图例组件包括颜色、朝向、位置等
			legend: {
				data: ['销量'],
				bottom: 0,
				formatter: '2020'
			},
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
		this.initCharts(document.getElementById('main'),option)
		
		//pie
		let pieData = [
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
		const pieOption = {
			title: {
				text: '三角函数',
				x: 'center',
				y: '38%',
				textStyle: {
					fontWeight: 'bold',
					fontSize: 16
				}
			},
			tooltip: {
				show: true,
				trigger: 'item',
				formatter: "{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical', //horizontal
				top: '74%',
				data:[{
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
			},
			series: [{
				type: 'pie',
				selectedMode: 'single',
				zlevel: 1,
				center: ['50%','40%'],//饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
				radius: ['36%','58%'],
				color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
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
					emphasis: {
						color: '#57B3FE',
					},
					labelLine: {
						normal: {
							show: false
						}
					}
				},
				data: pieData
			}]
		}
		
		const TestOption = {
		    title: {
		        text: '某站点用户访问来源',
		        subtext: '纯属虚构',
		        left: 'center'
		    },
		    tooltip: {
		        trigger: 'item',
		        formatter: '{a} <br/>{b} : {c} ({d}%)'
		    },
				toolbox:{
					feature: {
						dataView: { show:true, readOnly:false },
						magicType: { show:true, type:['line','bar']},
						restore: { show:true },
						saveAsImage: { show:true }
					}
				},
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: [{
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
		    },
		    series: [
		        {
		            type: 'pie',
		            radius: '55%',
		            center: ['50%', '60%'],
								color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
		            data: pieData,
		            emphasis: {
		                itemStyle: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
		this.initCharts(document.getElementById('main2'),pieOption).dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: 0,
		})
		
		//new
		const manyOption = {
			title: {
				text: '个人总分较班级/年级',
				left: 'center'
			},
			legend: {
				top: 30,
				right: 120,
				bottom: 30,
				data: ['我','年级','班级']
			},
			toolbox: {
				feature: {
					dataView: { show:true, readOnly:true },
					magicType: { show:true, type:['line','bar']},
					restore: { show:true },
					saveAsImage: { show:true }
				}
			},
			calculable: true,
			tooltip: {
				formatter: function(params){
					return params.name + "<br/>" + '分数:' + params.value;
				}
			},
			xAxis: {
				type: 'category',
				data: ['最高分', '最低分', '平均分']
			},
			yAxis: {
				type: 'value'
			},
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
		this.initCharts(document.getElementById('main3'),manyOption)
	}
  render() {
    return (
      <div style={{textAlign:'center',margin:20}}>
				<div id="main" style={{width:'600px',height:'400px'}}></div>,
				<div id="main2" style={{width:'600px',height:'400px'}}></div>,
				<div id="main3" style={{width:'800px',height:'600px'}}></div>
			</div>
    )
  }
}
