import React from 'react';
import { useDispatch } from 'react-redux';
import { notification, Popconfirm, Button, Space } from 'antd';
import { SearchParams, useTypedSelector } from 'Util/types';
import { CSSObject } from '@emotion/core';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { OrderStatus } from 'Util/enums';
import { RootState } from 'Redux/store';
import { Actions, withAuth } from 'reduxypat';
import { OrderResponseDTO } from 'reduxypat/lib/Api/api-types';
import { Api } from 'reduxypat/lib/Api/api';

type PropTypes = {
  record: OrderResponseDTO;
  params: SearchParams;
  closeDrawer?: () => void;
};

const getNextState = (page: SearchParams['page']): string | undefined => {
  if (page === 'newOrders') return 'PREPARING';
  if (page === 'preparing') return 'READY';
};

const getButtonText = (page: SearchParams['page']): string | undefined => {
  if (page === 'newOrders') return 'Hazırla';
  if (page === 'preparing') return 'Hazırlandı';
};

export const OrderActionsComponent = (props: PropTypes): JSX.Element => {
  const dispatch = useDispatch();

  const loading = useTypedSelector((state: RootState) => state.orders.searchOrderAsync.loading);

  const changeOrderStatusTo = (status: keyof typeof OrderStatus): void => {
    withAuth(Api.v1OrderUpdateorderstatusasyncCreate, {
      orderId: props.record.id,
      orderStatus: status,
    })
      .then((response) => {
        if (response.result) {
          notification.success({
            message: 'Başarılı',
            description: `Sipariş "${OrderStatus[status]}" durumuna geçirildi.`,
          });
        } else {
          notification.error({
            message: 'Başarısız',
            description: `Sipariş durumu değiştirilemedi`,
          });
        }

        return dispatch(Actions.orders.searchOrderAsync(props.params));
      })
      .catch(() => {
        props.closeDrawer && props.closeDrawer();
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
          title={`Siparişi ${getButtonText(props.params.page)} durumuna almak emin misiniz?`}
          onConfirm={() => {
            changeOrderStatusTo(getNextState(props.params.page) as any);
          }}
        >
          <Button
            disabled={loading}
            loading={loading}
            icon={<CheckOutlined />}
            type="primary"
            css={styles.confirm}
          >
            {getButtonText(props.params.page)}
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
