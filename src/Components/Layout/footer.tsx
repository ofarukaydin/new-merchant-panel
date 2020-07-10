import React from 'react';
import { Layout } from 'antd';
import { CSSObject } from '@emotion/core';

export const LayoutFooter = (): JSX.Element => {
  return <Layout.Footer css={styles.footer}>Tarım Kredi Koop.</Layout.Footer>;
};

const styles: CSSObject = { footer: { textAlign: 'center' } };
