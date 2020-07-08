import React from 'react';
import OrderActionsComponent from 'Containers/OrderList/OrderActionsComponent';
import { isoToLocalDate } from 'Util/Util';
import { SearchParams } from 'Util/Types';
import { orderStatusColors, orderStatus } from 'Util/Enums';
import { ColumnProps } from 'antd/lib/table';
import ThemeConfig from 'Util/ThemeConfig';
import { CSSObject } from '@emotion/core';
import { Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { OrderResponseDTO } from 'Redux/Helpers/ApiTypes';

export default function getOrderListColumns(
  params: SearchParams,
  openDrawerWith: (arg: OrderResponseDTO) => void,
) {
  const baseOrderListColumns: Array<ColumnProps<any>> = [
    {
      title: 'Sipariş Tarihi',
      dataIndex: 'orderDate',
      sorter: true,
      render: (orderDate: any) => isoToLocalDate(orderDate),
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
      render: (amount: any) => <span css={styles.price}>{amount}₺</span>,
    },
    {
      title: 'Durum',
      dataIndex: 'orderStatus',
      sorter: true,
      render: (order: keyof typeof orderStatusColors) => (
        <Tag icon={order == 'NEW' && <ClockCircleOutlined />} color={orderStatusColors[order]}>
          {orderStatus[order]}
        </Tag>
      ),
    },
    {
      title: 'Sipariş Detayı',
      dataIndex: 'products',
      sorter: false,
      render: (_, record: OrderResponseDTO) => {
        return <a onClick={() => openDrawerWith(record)}>Sipariş Detayı</a>;
      },
    },
  ];

  if (params.page === 'cancelledOrders') {
    baseOrderListColumns.splice(baseOrderListColumns.length - 1, 0, {
      title: 'İptal Nedeni',
      dataIndex: 'notes',
      sorter: true,
    });
  } else if (params.page === 'newOrders' || params.page === 'preparing') {
    baseOrderListColumns.push({
      title: 'İşlemler',
      dataIndex: 'actions',
      sorter: false,
      render: (_: any, record: any) => <OrderActionsComponent params={params} record={record} />,
    });
  } else {
    baseOrderListColumns.splice(
      baseOrderListColumns.length - 2,
      0,
      {
        title: 'Kargo Fiyatı',
        dataIndex: 'shippingPrice',
        sorter: true,
        render: (shippingPrice: any) => <span css={styles.price}>{shippingPrice}₺</span>,
      },
      {
        title: 'Toplam Faturalandırılacak Fiyat',
        dataIndex: 'totalAmount',
        sorter: true,
        render: (totalAmount: any) => <span css={styles.price}>{totalAmount}₺</span>,
      },
    );
  }

  return baseOrderListColumns;
}

const styles: CSSObject = {
  price: {
    fontSize: ThemeConfig.fontSize.xl,
    fontWeight: ThemeConfig.fontWeight.bold,
  },
};
