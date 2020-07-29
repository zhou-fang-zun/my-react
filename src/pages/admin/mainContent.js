import React from 'react'
import { Redirect, withRouter, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { routes } from '../../routers/router';

const { Content } = Layout;
const MainContent = () => {
	return (
		<Content className="admin-content">
			<Switch>
				{
					routes.map(item => <Route exact render={() => <item.component />} key={item.path} path={item.path} />)
				}
				<Redirect to="/404" />
			</Switch>
		</Content>
	)
}

export default withRouter(MainContent)