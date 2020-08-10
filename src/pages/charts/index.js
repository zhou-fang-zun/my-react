import React, { Component } from 'react'

/* 
  图表管理
*/
import echarts from 'echarts'
import ReactExcel from '../../components/excel'

export default class Charts extends Component {
	state={
		dataSource:[],
		columns:[]
	}
	// 处理excel成功
	success=(data,columns)=>{
		this.setState({
			dataSource:data,
			columns:columns
		})
	}
	
	initCharts = (documents,data) => {
		let myChart = echarts.init(documents);
		myChart.setOption(data)
	}
	componentDidMount(){
		const option = {
			title: { text: 'ECharts 入门示例', left: 'center', subtext: '二级标题' },
			tooltip: {
				formatter(){
					return '这是一个提示'
				}
			},
			legend: {
				data: ['销量'],
				bottom: 0,
				formatter: '2020'
			},
			color: ['#6666FF','#990000'],
			xAxis: {
				data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			},
			yAxis: {},
			series: {
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20],
				item
			}
		}
		this.initCharts(document.getElementById('main'),option)
	}
  render() {
    return (
      <div style={{textAlign:'center',margin:20}}>
				<ReactExcel 
					success={this.success}
					processData={this.processData}
					importBtnTxt='点我上传一个excel试试'
					exportBtn={true}
				>
				</ReactExcel>
				<br/>
				<br/>
				<div id="main" style={{width:'600px',height:'400px'}}></div>
			</div>
    )
  }
}
