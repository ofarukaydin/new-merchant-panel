import React, { memo } from 'react';
import { X, Check } from 'react-feather';
import { orderStatus } from 'Util/Enums';
import { useDispatch } from 'react-redux';
import { asyncGetOrders } from 'Redux/OrderListSlice';
import Api from 'Util/Api';
import { notification, Popconfirm } from 'antd';
import { SearchParams } from 'Util/Types';

type PropTypes = {
  record: any;
  params: SearchParams;
};

const OrderActionsComponent = (props: PropTypes) => {
  const dispatch = useDispatch();

  const changeOrderStatusTo = (status: keyof typeof orderStatus) => {
    Api.post('/order/updateorderstatusasync', { orderId: props.record.id, orderStatus: status })
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
    <span>
      <a
        href="javascript:;"
        onClick={() => {
          changeOrderStatusTo('READY');
        }}
        style={{ marginRight: 8 }}
      >
        Onayla
      </a>
      <Popconfirm
        title="Siparişi iptal etmek istediğinize emin misiniz?"
        onConfirm={() => {
          changeOrderStatusTo('CANCELLED');
        }}
      >
        <a>İptal et</a>
      </Popconfirm>
    </span>
  );
};

export default memo(OrderActionsComponent);
