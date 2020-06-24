import React from 'react';
import { Layout } from 'antd';
import { CSSObject } from '@emotion/core';

type PropTypes = {
  authenticated: boolean;
};

const LayoutHeader = () => {
  return <Layout.Header css={styles.header} />;
};

const styles: CSSObject = { header: { backgroundColor: 'white' } };

export default LayoutHeader;
