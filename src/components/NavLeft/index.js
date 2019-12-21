import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import './index.less'


const { SubMenu } = Menu;

const menuRender = (menuList) => {
    console.log(menuList)
    return menuList.map(item => {
        if (item.children) {
            return (
                <SubMenu key={item.title} title={item.title}>
                    {menuRender(item.children)}
                </SubMenu>
            )
        } else {
            return (
                <Menu.Item key={item.title}>
                    <Link to={'/admin'+item.key}>{item.title}</Link>
                </Menu.Item>
            )
        }

    })
}




export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/logo-ant.svg" alt="" />
                    <h1>Imooc MS</h1>
                    <Menu theme="dark" mode="inline">
                        {menuRender(this.props.menuList)}
                    </Menu>
                </div>
            </div>
        )
    }
}