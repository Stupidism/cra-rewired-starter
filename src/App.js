import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import './App.css';

const { Header, Sider, Content } = Layout;

class SiderDemo extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className="App">
        <Header className="header">
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
          Current Status
        </Header>

        <Sider
          className="sider"
          trigger={null}
          collapsible
          collapsedWidth={0}
          collapsed={this.state.collapsed}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="clock-circle-o" />
              <span>Current Status</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="calendar" />
              <span>Historical Data</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="bars" />
              <span>Node List</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="api" />
              <span>Group List</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="tags-o" />
              <span>Tag List</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="setting" />
              <span>Settings</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="logout" />
              <span>Sign Out</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    );
  }
}

export default SiderDemo;
