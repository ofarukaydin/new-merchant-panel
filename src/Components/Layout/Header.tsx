import React from 'react';
import { Layout } from 'antd';

type PropTypes = {
  authenticated: boolean;
};

const LayoutHeader = () => {
  return <Layout.Header style={{ backgroundColor: 'white' }} />;
};

export default LayoutHeader;
