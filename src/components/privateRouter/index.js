import React from 'react';

import { Route, Redirect } from 'react-router-dom';
//获取session方法
import { getToken } from '../../utils/cookie.js'

console.log(getToken(),'token')
const PrivateRouter = ({ component:Component, ...rest }) => {
	return (
		<Route {...rest} render={routeProps=> (
			getToken() ? <Component {...routeProps} /> : <Redirect to="/login" />
		)}
		/>
	)
}

export default PrivateRouter;