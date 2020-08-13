import Index from '../pages/index'
import Charts from '../pages/charts'
import Home from '../pages/home'
import Test from '../pages/about'
import DepartmentAdd from '../pages/department/Add.js'
import DepartmentList from '../pages/department/List.js'


export const routes = [
	{ path: '/', component:Index },
	{ path: '/charts', component:Charts },
	{ path: '/home/list', component:Home },
	{ path: '/test', component:Test },
	{ path: '/department/add', component:DepartmentAdd },
	{ path: '/department/list', component:DepartmentList }
]