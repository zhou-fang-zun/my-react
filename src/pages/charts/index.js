import React, { Component } from 'react'

/* 
  图表管理
*/
import { Row, Col } from 'antd';
//组件
import SingleBar from '../../components/charts/bar.js'
import Pie from '../../components/charts/pie.js'
import SwitchType from '../../components/charts/toolbox.js'
import ProgressPie from '../../components/charts/ProgressPie.js'

export default class Charts extends Component {
	state={
		
	}
	
	componentDidMount(){
		
	}
  render() {
    return (
      <div style={{textAlign:'center',margin:20}}>,
				<Row gutter={18}>
					<Col span={12}>
						<SingleBar />
					</Col>
					<Col span={12}>
						<Pie />
					</Col>
					<Col span={12} style={{marginTop:'30px'}}>
						<SwitchType />
					</Col>
					<Col span={12} style={{marginTop:'30px'}}>
						<ProgressPie />
					</Col>
				</Row>
			</div>
    )
  }
}
