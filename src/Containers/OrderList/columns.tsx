import React from 'react';
import { isoToLocalDate } from 'Util/util';
import { SearchParams } from 'Util/types';
import { OrderStatusColors, OrderStatus } from 'Util/enums';
import { ColumnProps } from 'antd/lib/table';
import { ThemeConfig } from 'Util/theme-config';
import { CSSObject } from '@emotion/core';
import { Tag, Button } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { OrderResponseDTO } from 'Redux/Helpers/api-types';
import { OrderActionsComponent } from 'Containers/OrderList/action-component';

export function getOrderListColumns(
  params: SearchParams,
  openDrawerWith: (arg: OrderResponseDTO) => void,
): Array<ColumnProps<OrderResponseDTO>> {
  const baseOrderListColumns: Array<ColumnProps<OrderResponseDTO>> = [
    {
      title: 'Sipariş Tarihi',
      dataIndex: 'orderDate',
      sorter: true,
      render: (orderDate: OrderResponseDTO['orderDate']) => isoToLocalDate(orderDate || ''),
    },
    {
      title: 'Sipariş Numarası',
      dataIndex: 'orderNumber',
      sorter: true,
    },
    {
      title: 'Alıcı',
      dataIndex: 'customer',
      sorter: false,
    },
    {
      title: 'Satış Fiyatı',
      dataIndex: 'amount',
      sorter: true,
      render: (_, { amount }) => <span css={styles.price}>{amount || 0}₺</span>,
    },
    {
      title: 'Durum',
      dataIndex: 'orderStatus',
      sorter: true,
      render: (order: keyof typeof OrderStatusColors) => (
        <Tag icon={order === 'NEW' && <ClockCircleOutlined />} color={OrderStatusColors[order]}>
          {OrderStatus[order]}
        </Tag>
      ),
    },
    {
      title: 'Sipariş Detayı',
      dataIndex: 'products',
      sorter: false,
      render: (_, record: OrderResponseDTO): JSX.Element => {
        return <Button onClick={() => openDrawerWith(record)}>Sipariş Detayı</Button>;
      },
    },
  ];

  if (params.page === 'cancelledOrders') {
    baseOrderListColumns.splice(-1, 0, {
      title: 'İptal Nedeni',
      dataIndex: 'notes',
      sorter: true,
    });
  } else if (params.page === 'newOrders' || params.page === 'preparing') {
    baseOrderListColumns.push({
      title: 'İşlemler',
      dataIndex: 'actions',
      sorter: false,
      render: (_, record) => <OrderActionsComponent params={params} record={record} />,
    });
  } else {
    baseOrderListColumns.splice(
      -2,
      0,
      {
        title: 'Kargo Fiyatı',
        dataIndex: 'shippingPrice',
        sorter: true,
        render: (_, { shippingPrice }) => <span css={styles.price}>{shippingPrice}₺</span>,
      },
      {
        title: 'Toplam Faturalandırılacak Fiyat',
        dataIndex: 'totalAmount',
        sorter: true,
        render: (_, { totalAmount }) => <span css={styles.price}>{totalAmount}₺</span>,
      },
    );
  }

  return baseOrderListColumns;
}

const styles: CSSObject = {
  price: {
    fontSize: ThemeConfig.FontSize.xl,
    fontWeight: ThemeConfig.FontWeight.bold,
  },
};
