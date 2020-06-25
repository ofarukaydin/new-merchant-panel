import React from 'react';
import OrderActionsComponent from 'Containers/OrderList/OrderActionsComponent';
import { isoToLocalDate } from 'Util/Util';
import { SearchParams } from 'Util/Types';
import { orderStatus, orderStatusColors } from 'Util/Enums';
import { ColumnProps } from 'antd/lib/table';
import ThemeConfig from 'Util/ThemeConfig';
import { CSSObject } from '@emotion/core';
import { Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

export default function getOrderListColumns(params: SearchParams) {
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
      render: (order: keyof typeof orderStatus) => (
        <Tag icon={order == 'ORDERED' && <ClockCircleOutlined />} color={orderStatusColors[order]}>
          {orderStatus[order]}
        </Tag>
      ),
    },
  ];

  if (params.page === 'cancelledOrders') {
    baseOrderListColumns.splice(baseOrderListColumns.length - 1, 0, {
      title: 'İptal Nedeni',
      dataIndex: 'notes',
      sorter: true,
    });
  } else if (params.page === 'newOrders') {
    baseOrderListColumns.push({
      title: 'İşlemler',
      dataIndex: 'actions',
      sorter: false,
      render: (_: any, record: any) => <OrderActionsComponent params={params} record={record} />,
    });
  } else {
    baseOrderListColumns.splice(
      baseOrderListColumns.length - 1,
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
