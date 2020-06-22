import React from 'react';
import { Radio } from 'antd';
import { navigateTo } from 'Util/Util';

const ShippingStageHeader = () => {
  return (
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button
        onChange={() => navigateTo('/orders', { page: 'shippingStage', status: 'READY' })}
        value="a"
      >
        Gönderime Hazır
      </Radio.Button>
      <Radio.Button
        onChange={() => navigateTo('/orders', { page: 'shippingStage', status: 'SHIPPING' })}
        value="b"
      >
        Taşıma Durumunda
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

export default ShippingStageHeader;
