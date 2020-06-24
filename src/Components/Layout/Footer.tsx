import React from 'react';
import { Layout } from 'antd';
import { CSSObject } from '@emotion/core';

const LayoutFooter = () => {
  return <Layout.Footer css={styles.footer}>Tarım Kredi Koop.</Layout.Footer>;
};

const styles: CSSObject = { footer: { textAlign: 'center' } };

export default LayoutFooter;
