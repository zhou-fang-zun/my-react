import React,{ Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Menu } from 'antd'

import { menus } from '../../routers/menus'
import { urlToList } from '../../utils/commonfn';
const { SubMenu } = Menu;

class SideMenu extends Component{
	// 递归渲染菜单
	renderMenu = data => {
	  return data.map(item => {
	    if (item.children) {
	      return (
	        // this.handleFilter(item.permission) && (
	        <SubMenu
	          key={item.path}
	          title={
	            <span>
	              {item.icon}
	              <span>{item.title}</span>
	            </span>
	          }
	        >
	          {this.renderMenu(item.children)}
	        </SubMenu>
	        // )
	      );
	    }
	    return (
	      // this.handleFilter(item.permission) && (
	      <Menu.Item key={item.path}>
	        <Link to={item.path} >
	          {item.icon}
	          <span>{item.title}</span>
	        </Link>
	      </Menu.Item>
	      // )
	    );
	  });
	};
	
	render() {
	  const menuSelected = this.props.history.location.pathname;
	  const menuOpenedArray = urlToList(menuSelected).slice(0,-1);
	  console.log(menuSelected);
	  console.log(menuOpenedArray);
	  return (
	    <div className='sideMenu'>
	      <Link to='/' className='sideMenu-header'>
	        <h1>React后台系统</h1>
	      </Link>
	      <Menu
	        // 初始展开的 SubMenu 菜单项 key 数组
	        defaultOpenKeys={menuOpenedArray}
	        // 初始选中的菜单项 key 数组
	        defaultSelectedKeys={menuSelected}
	        // 当前选中的菜单项 key 数组
	        selectedKeys={[menuSelected]}
	        mode="inline"
	        // 主题颜色
	        theme="dark"
	      >
	        {this.renderMenu(menus)}
	      </Menu>
	    </div>
	
	  )
	}
}

export default withRouter(SideMenu)