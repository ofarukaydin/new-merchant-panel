import React, { useState, useLayoutEffect } from 'react';
import { Layout, Grid } from 'antd';
import LayoutSideMenu from 'Components/Layout/SideMenu';
import LayoutHeader from 'Components/Layout/Header';
import LayoutFooter from 'Components/Layout/Footer';
import { checkAuthState } from 'Util/Auth';
import { CSSObject } from '@emotion/core';
import LayoutDrawer from 'Components/Layout/Drawer';

const { Content } = Layout;

const LayoutUI = (props: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const screens = Grid.useBreakpoint();

  const smallScreen = !!screens.xs;

  useLayoutEffect(() => {
    checkAuthState();
  }, []);

  return (
    <Layout css={styles.container}>
      {smallScreen ? (
        <LayoutDrawer onClose={() => setIsDrawerVisible(false)} visible={isDrawerVisible} />
      ) : (
        <LayoutSideMenu collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} />
      )}
      <Layout>
        <LayoutHeader
          toggleDrawer={() => setIsDrawerVisible(!isDrawerVisible)}
          visibleBurger={smallScreen}
        />
        <Content css={styles.contentContainer}>{props.children}</Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

const styles: CSSObject = {
  container: { minHeight: '100vh', position: 'relative' },
  contentContainer: { margin: '0 16px' },
};

export default LayoutUI;
