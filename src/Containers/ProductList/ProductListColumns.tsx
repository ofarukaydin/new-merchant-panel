import React from 'react';

export default function getProductListColumns() {
  const baseProductListColumns = [
    {
      name: 'Ürün Resmi',
      selector: 'imageUrl',
      cell: (row: any) => <img src={row.imageUrl} height="100" width="100" alt={row.productName} />,
    },
    {
      name: 'Ürün Adı',
      selector: 'productName',
      sortable: true,
      cell: (row: any) => (
        <p title={row.productName} className="tw-mb-0 tw-font-bold">
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
    },
    {
      name: 'Stok Adedi',
      selector: 'stock',
      sortable: true,
    },
    {
      name: 'Fiyat',
      selector: 'price',
      sortable: true,
      cell: (row: any) => <span className="tw-text-2xl tw-font-bold">{row.price}₺</span>,
    },
    {
      name: 'Kampanya',
      selector: 'campain',
      sortable: true,
      cell: (row: any) => (row.campain ? 'Evet' : 'Hayır'),
    },
    {
      name: 'Hızlı Kargo',
      selector: 'orderStatus',
      sortable: true,
      cell: (row: any) => (row.fastShipping ? 'Evet' : 'Hayır'),
    },
  ];

  return baseProductListColumns;
}
