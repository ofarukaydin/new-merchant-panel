import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetOrders } from 'Redux/OrderListSlice';
import Api from 'Util/Api';
import { notification, Popconfirm, Button, Space } from 'antd';
import { SearchParams } from 'Util/Types';
import { CSSObject } from '@emotion/core';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { sliceTypes } from 'Redux/Helpers/SliceTypes';
import { RootState } from 'Redux/Store';
import { orderStatus } from 'Util/Enums';

type PropTypes = {
  record: any;
  params: SearchParams;
};

const OrderActionsComponent = (props: PropTypes) => {
  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state[sliceTypes.orders].loading);

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
      <Space>
        <Popconfirm
          title="Siparişi hazırlamak istediğinize emin misiniz?"
          onConfirm={() => {
            changeOrderStatusTo('READY');
          }}
        >
          <Button
            disabled={loading}
            loading={loading}
            icon={<CheckOutlined />}
            type="primary"
            css={styles.confirm}
          >
            Hazırla
          </Button>
        </Popconfirm>

        <Popconfirm
          title="Siparişi iptal etmek istediğinize emin misiniz?"
          onConfirm={() => {
            changeOrderStatusTo('CANCELLED');
          }}
        >
          <Button disabled={loading} loading={loading} icon={<CloseOutlined />}>
            İptal et
          </Button>
        </Popconfirm>
      </Space>
    </span>
  );
};

const styles: CSSObject = {
  confirm: { marginRight: 8 },
};

export default memo(OrderActionsComponent);
