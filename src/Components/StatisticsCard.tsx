import React, { ReactNode } from 'react';
import { Card } from 'antd';
import ThemeConfig from 'Util/ThemeConfig';
import { CSSObject } from '@emotion/core';

type PropTypes = {
  title: string;
  value: number;
  icon: ReactNode;
};

const StatisticsCard = (props: PropTypes) => {
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
    fontSize: ThemeConfig.fontSize['3xl'],
    fontWeight: ThemeConfig.fontWeight.bold,
    color: ThemeConfig.color.black,
  },
  icon: {
    color: ThemeConfig.color.primary,
    fontSize: ThemeConfig.fontSize['3xl'],
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeConfig.color.gray200,
    borderRadius: ThemeConfig.borderRadius.full,
    height: ThemeConfig.fontSize['6xl'],
    width: ThemeConfig.fontSize['6xl'],
  },
};

export default StatisticsCard;
