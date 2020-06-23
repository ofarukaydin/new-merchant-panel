import React, { ReactNode } from 'react';
import { Card } from 'antd';

type PropTypes = {
  title: string;
  value: number;
  icon: ReactNode;
};

const StatisticsCard = (props: PropTypes) => {
  return (
    <Card>
      <div className="tw-flex tw-justify-between tw-items-center">
        <div>
          <span className="tw-text-2xl tw-font-bold tw-text-black">{props.value}</span>
          <div>{props.title}</div>
        </div>
        <div className="tw-text-primary tw-text-3xl">{props.icon}</div>
      </div>
    </Card>
  );
};

export default StatisticsCard;
