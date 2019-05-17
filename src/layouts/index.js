
import React from 'react'
import { Menu } from 'antd'
import routes from '../../config/router.config'
import Link from 'umi/link';
const { SubMenu } = Menu;
export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'inline',
      theme: 'dark',
    }
  }
  renderItem = (routes) => {
    return routes.map((route) => {
      if (route.routes) {
        return (
          <SubMenu key={route.path} title={route.meta.title}>
            {this.renderItem(route.routes)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={route.path}>
         <Link to={route.path}>{route.meta.title}</Link>
        </Menu.Item>
      )
    })
  }
  render() {
    return (
      <div style={{height:'100%'}}>
        <Menu
          style={{ width: 256,height:'100%'}}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          {this.renderItem(routes)}
        </Menu>
      </div>
    )
  }
}
