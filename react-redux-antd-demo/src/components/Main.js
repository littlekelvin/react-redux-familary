import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import Top from './Top'

const {Header, Sider, Content, Footer} = Layout;
const {SubMenu} = Menu
import { Link } from 'react-router';

export default class Main extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Header style={{background: '#EEEEEE', padding: 0}}>
                    <Top/>
                </Header>
                <Content style={{height: '100%'}}>
                    <Layout style={{height: '100%'}}>
                        <Sider
                            trigger={null}
                            collapsible
                            collapsed={this.state.collapsed}
                            style={{margin: '1px'}}>
                            <div className="logo"/>
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                                <SubMenu key="sub1" title={<span><Icon type="home"/>ESR Management</span>}>
                                    <Menu.Item key="1"><Link to="/esr/search">ESR Search</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/esr/add">ESR Add</Link></Menu.Item>
                                </SubMenu>
                                <Menu.Item key="3">
                                    <Link to="/about">
                                        <Icon type="setting"/>
                                        <span>SQL Executor</span>
                                    </Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{
                                margin: '8px 8px', padding: 15, background: '#fff', minHeight: 600,
                            }}>
                                {this.props.children}
                            </Content>
                            <Footer style={{textAlign: 'center'}}>
                                Copyright(C) 1998-2019. China Ocean Shipping (Group) Company. All rights reserved
                            </Footer>
                        </Layout>
                    </Layout>
                </Content>
            </Layout>
        );
    }
}