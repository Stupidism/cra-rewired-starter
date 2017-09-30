// @flow
import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { menuItems, selectMenuItem } from './store/modules/menuItems';

import './App.css';

const { Header, Sider, Content } = Layout;

// ------------------------------------
// Types
// ------------------------------------
type OnSelectMenuItem = ({ key: string }) => mixed;

type Props = {
  onSelectMenuItem: OnSelectMenuItem,
  selectedMenuItem: { name: string, icon: string },
};

type State = {
  collapsed: boolean,
};

// ------------------------------------
// Component
// ------------------------------------
class SiderDemo extends React.Component<Props, State> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
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
          {this.props.selectedMenuItem.name}
        </Header>

        <Sider
          className="sider"
          trigger={null}
          collapsible
          collapsedWidth={0}
          collapsed={this.state.collapsed}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['0']}
            onSelect={this.props.onSelectMenuItem}
          >
            {menuItems.map(({ name, icon }, index) => (
              <Menu.Item key={index}>
                <Icon type={icon} />
                <span>{name}</span>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    );
  }
}

// ------------------------------------
// Handlers
// ------------------------------------
const onSelectMenuItem: OnSelectMenuItem = ({ key }) =>
  selectMenuItem(Number(key));

const mapStateToProps = state => ({
  selectedMenuItem: menuItems[state.menuItems.selected],
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onSelectMenuItem,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SiderDemo);
