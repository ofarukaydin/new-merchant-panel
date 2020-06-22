import React, { memo } from 'react';
import { X, Check } from 'react-feather';
import { orderStatus } from 'Util/Enums';
import { useDispatch } from 'react-redux';
import { asyncGetOrders } from 'Redux/OrderListSlice';
import Api from 'Util/Api';
import { notification } from 'antd';
import { SearchParams } from 'Util/Types';

type PropTypes = {
  row: any;
  params: SearchParams;
};

const OrderActionsComponent = (props: PropTypes) => {
  const dispatch = useDispatch();

  const changeOrderStatusTo = (status: keyof typeof orderStatus) => {
    Api.post('/order/updateorderstatusasync', { orderId: props.row.id, orderStatus: status })
      .then((response: any) => {
        if (response?.data?.result) {
          notification.success({
            message: 'Başarılı',
            description: `Sipariş "${orderStatus[status]}" durumuna geçirildi.`,
          });
        } else {
          notification.error({
            message: 'Başarısız',
            description: `Sipariş durumu değiştirilemedi`,
          });
        }
        dispatch(asyncGetOrders(props.params));
      })
      .catch(() => {
        notification.error({
          message: 'Başarısız',
          description: `Sipariş durumu değiştirilemedi`,
        });
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: 70 }}>
      <Check onClick={() => changeOrderStatusTo('READY')} className="cursor-pointer" size={20} />
      <X onClick={() => changeOrderStatusTo('CANCELLED')} className="cursor-pointer" size={20} />
    </div>
  );
};

export default memo(OrderActionsComponent);
