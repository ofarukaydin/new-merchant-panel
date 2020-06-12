import React, { useState } from 'react';
import { Layout } from 'antd';
import LayoutSideMenu from 'Components/Layout/SideMenu';
import LayoutHeader from 'Components/Layout/Header';
import LayoutBreadcrumb from 'Components/Layout/Breadcrumb';

const { Content } = Layout;

const LayoutUI = (props: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutHeader />
      <Layout>
        <LayoutSideMenu collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <LayoutBreadcrumb />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutUI;
