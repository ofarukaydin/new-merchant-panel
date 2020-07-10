import React, { ReactNode } from 'react';
import { Card } from 'antd';
import { ThemeConfig } from 'Util/theme-config';
import { CSSObject } from '@emotion/core';

type PropTypes = {
  title: string;
  value?: number;
  icon: ReactNode;
};

export const StatisticsCard = (props: PropTypes): JSX.Element => {
  return (
    <Card>
      <div css={styles.statisticsContainer}>
        <div>
          <span css={styles.value}>{props.value}</span>
          <div>{props.title}</div>
        </div>
        <div css={styles.iconContainer}>
          <div css={styles.icon}>{props.icon}</div>
        </div>
      </div>
    </Card>
  );
};

const styles: CSSObject = {
  statisticsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    fontSize: ThemeConfig.FontSize['3xl'],
    fontWeight: ThemeConfig.FontWeight.bold,
    color: ThemeConfig.Color.black,
  },
  icon: {
    color: ThemeConfig.Color.primary,
    fontSize: ThemeConfig.FontSize['3xl'],
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeConfig.Color.gray200,
    borderRadius: ThemeConfig.BorderRadius.full,
    height: ThemeConfig.FontSize['6xl'],
    width: ThemeConfig.FontSize['6xl'],
  },
};
