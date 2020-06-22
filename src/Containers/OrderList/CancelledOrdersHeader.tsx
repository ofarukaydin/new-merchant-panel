import React, { memo } from 'react';
import { Radio } from 'antd';
import { navigateTo } from 'Util/Util';

const CancelledOrdersHeader = () => {
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
            userType: 'merchant',
          })
        }
        value="b"
      >
        Mağaza Tarafından
      </Radio.Button>
      <Radio.Button
        onChange={() =>
          navigateTo('/orders', {
            page: 'cancelledOrders',
            status: 'CANCELLED',
            userType: 'service',
          })
        }
        value="c"
      >
        Edakik Tarafından
      </Radio.Button>
    </Radio.Group>
  );
};

export default memo(CancelledOrdersHeader);
