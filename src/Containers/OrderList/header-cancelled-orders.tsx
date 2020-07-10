import React from 'react';
import { Radio } from 'antd';
import { navigateTo } from 'Util/util';

export const CancelledOrdersHeader = (): JSX.Element => {
  return (
    <Radio.Group buttonStyle="solid">
      <Radio.Button
        onChange={() =>
          navigateTo('/orders', {
            page: 'cancelledOrders',
            status: 'CANCELLED',
            userType: 'customer',
          })
        }
        value="a"
      >
        Müşteri Tarafından
      </Radio.Button>
      <Radio.Button
        onChange={() =>
          navigateTo('/orders', {
            page: 'cancelledOrders',
            status: 'CANCELLED',
            userType: 'merchantBranch',
          })
        }
        value="b"
      >
        Mağaza Tarafından
      </Radio.Button>
    </Radio.Group>
  );
};
