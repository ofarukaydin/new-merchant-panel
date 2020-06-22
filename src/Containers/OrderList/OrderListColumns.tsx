import React from 'react';
import OrderActionsComponent from 'Containers/OrderList/OrderActionsComponent';
import { isoToLocalDate } from 'Util/Util';
import { SearchParams } from 'Util/Types';
import { orderStatus, IOrderStatusRow } from 'Util/Enums';

export default function getOrderListColumns(params: SearchParams) {
  const baseOrderListColumns = [
    {
      name: 'Sipariş Tarihi',
      selector: 'orderDate',
      sortable: true,
      cell: (row: any) => isoToLocalDate(row.orderDate),
    },
    {
      name: 'Sipariş Numarası',
      selector: 'orderNumber',
      sortable: true,
    },
    {
      name: 'Alıcı',
      selector: 'customer',
      sortable: false,
    },
    {
      name: 'Satış Fiyatı',
      selector: 'amount',
      sortable: true,
      cell: (row: any) => <span className="tw-text-2xl tw-font-bold">{row.amount}₺</span>,
    },
    {
      name: 'Durum',
      selector: 'orderStatus',
      sortable: true,
      cell: (row: IOrderStatusRow) => orderStatus[row.orderStatus],
    },
  ];

  if (params.page === 'cancelledOrders') {
    baseOrderListColumns.splice(baseOrderListColumns.length - 1, 0, {
      name: 'İptal Nedeni',
      selector: 'notes',
      sortable: true,
    });
  } else if (params.page === 'newOrders') {
    baseOrderListColumns.push({
      name: 'İşlemler',
      selector: 'actions',
      sortable: false,
      cell: (row: any) => <OrderActionsComponent params={params} row={row} />,
    });
  } else {
    baseOrderListColumns.splice(1, 0, {
      name: 'Teslimat Tarihi',
      selector: 'deliveryDate',
      sortable: true,
      cell: (row: any) => isoToLocalDate(row.deliveryDate),
    });
    baseOrderListColumns.splice(
      baseOrderListColumns.length - 1,
      0,
      {
        name: 'Kargo Fiyatı',
        selector: 'shippingPrice',
        sortable: true,
        cell: (row: any) => <span className="tw-text-2xl tw-font-bold">{row.shippingPrice}₺</span>,
      },
      {
        name: 'Toplam Faturalandırılacak Fiyat',
        selector: 'totalAmount',
        sortable: true,
        cell: (row: any) => <span className="tw-text-2xl tw-font-bold">{row.totalAmount}₺</span>,
      },
    );
  }

  return baseOrderListColumns;
}
