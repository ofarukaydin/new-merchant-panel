import React, { useState, useLayoutEffect } from 'react';
import { Layout } from 'antd';
import LayoutSideMenu from 'Components/Layout/SideMenu';
import LayoutHeader from 'Components/Layout/Header';
import LayoutBreadcrumb from 'Components/Layout/Breadcrumb';
import LayoutFooter from 'Components/Layout/Footer';
import { checkAuthState } from 'Util/Auth';
import { CSSObject } from '@emotion/core';

const { Content } = Layout;

const LayoutUI = (props: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  useLayoutEffect(() => {
    checkAuthState();
  }, []);

  return (
    <Layout css={styles.container}>
      <LayoutSideMenu collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} />
      <Layout>
        <LayoutHeader />
        <Content css={styles.contentContainer}>
          <LayoutBreadcrumb />
          {props.children}
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

const styles: CSSObject = {
  container: { minHeight: '100vh' },
  contentContainer: { margin: '0 16px' },
};

export default LayoutUI;
