import React,{ Component } from 'react'
import { Redirect, withRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { routes } from '../../routers/router';
//私有组件方法
import PrivateRouter from '../../components/privateRouter/index.js'

const { Content } = Layout;
// const MainContent = () => {
// 	return (
// 		<Content className="admin-content">
// 			<Switch>
// 				{
// 					routes.map(item => <Route exact render={() => <item.component />} key={item.path} path={item.path} />)
// 				}
// 				<Redirect to="/404" />
// 			</Switch>
// 		</Content>
// 	)
// }

// export default withRouter(MainContent)

class MainContent extends Component {
	//routes.map(item => <Route exact render={() => <item.component />} key={item.path} path={item.path} />)
	render(){
		return (
			<Content>
				<Switch>
					{
						routes.map(item => <PrivateRouter exact path={item.path} component={item.component}></PrivateRouter>)
					}
				</Switch>
				<Redirect to="/404" />
			</Content>
		)
	}
}

export default withRouter(MainContent)