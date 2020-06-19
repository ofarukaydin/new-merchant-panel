import React from 'react';

export default function getProductListColumns(page: string) {
  const baseProductListColumns = [
    {
      name: 'Ürün Adı',
      selector: 'productName',
      sortable: true,
      minWidth: '300px',
      cell: (row: any) => (
        <p title={row.productName} className="mb-0 text-truncate text-bold-500">
          {row.productName}
        </p>
      ),
    },
    {
      name: 'Kategori',
      selector: 'categoryName',
      sortable: true,
    },
    {
      name: 'SKU',
      selector: 'sku',
      sortable: true,
      maxWidth: '150px',
    },
    {
      name: 'Stok Adedi',
      selector: 'stock',
      sortable: true,
      maxWidth: '150px',
    },
    {
      name: 'Fiyat',
      selector: 'price',
      maxWidth: '150px',
      sortable: true,
      cell: (row: any) => <span className="text-2xl font-weight-bold">{row.price}₺</span>,
    },
    {
      name: 'Kampanya',
      selector: 'campain',
      maxWidth: '150px',
      sortable: true,
      cell: (row: any) => (row.campain ? 'Evet' : 'Hayır'),
    },
    {
      name: 'Hızlı Kargo',
      selector: 'orderStatus',
      maxWidth: '150px',
      sortable: true,
      cell: (row: any) => (row.fastShipping ? 'Evet' : 'Hayır'),
    },
  ];

  return baseProductListColumns;
}
