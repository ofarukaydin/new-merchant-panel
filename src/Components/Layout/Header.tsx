import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

type PropTypes = {
  authenticated: boolean;
};

const LayoutHeader = () => {
  return <Header style={{ backgroundColor: 'white' }} />;
};

export default LayoutHeader;
