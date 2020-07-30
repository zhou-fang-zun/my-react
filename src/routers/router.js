import Index from '../pages/index'
import Charts from '../pages/charts'
import Home from '../pages/home'
import Test from '../pages/about'


export const routes = [
	{ path:'/', component:Index },
	{ path:'/charts', component:Charts },
	{ path:'/home', component:Home },
	{ path:'/test', component:Test },
]