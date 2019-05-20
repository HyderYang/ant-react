import React from 'react'
import { Menu, Icon } from 'antd';
import { AppName, AppLogoSrc } from '../../config/common'
import MenuConfig from '../../config/menuConfig'

import './index.less'

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class Navleft extends React.Component{

  componentWillMount() {
    this.setState({
      menuTreeNode: this.renderMenu(MenuConfig)
    })
  }

  // 菜单渲染
  renderMenu = (data) => {
    // 递归拼接菜单信息
    return data.map((item) => {
        if (item.children) {
          return (
            <SubMenu title={item.title} key={item.key}>
              { this.renderMenu(item.children) }
            </SubMenu>
          );
        }

      return (
        <MenuItem title={ item.title } key={item.key}>
          { item.title }
        </MenuItem>
      )

    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src={ AppLogoSrc } />
          <h1>{ AppName }</h1>
        </div>

        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    );
  }

}