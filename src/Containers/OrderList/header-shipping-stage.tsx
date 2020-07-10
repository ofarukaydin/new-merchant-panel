import React from 'react';
import { Radio } from 'antd';
import { navigateTo } from 'Util/util';

export const ShippingStageHeader = (): JSX.Element => {
  return (
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button
        onChange={() => navigateTo('/orders', { page: 'shippingStage', status: 'READY' })}
        value="a"
      >
        Teslimata Hazır
      </Radio.Button>
      <Radio.Button
        onChange={() => navigateTo('/orders', { page: 'shippingStage', status: 'SHIPPING' })}
        value="b"
      >
        Teslimatta
      </Radio.Button>
      <Radio.Button
        onChange={() => navigateTo('/orders', { page: 'shippingStage', status: 'DELIVERED' })}
        value="c"
      >
        Teslim Edildi
      </Radio.Button>
      <Radio.Button
        onChange={() => navigateTo('/orders', { page: 'shippingStage', status: 'ALL' })}
        value="d"
      >
        Tümü
      </Radio.Button>
    </Radio.Group>
  );
};
