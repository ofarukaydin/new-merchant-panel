import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { CSSObject } from '@emotion/core';
import ThemeConfig from 'Util/ThemeConfig';
import { Tag } from 'antd';

const styles: CSSObject = {
  price: {
    fontSize: ThemeConfig.fontSize.xl,
    fontWeight: ThemeConfig.fontWeight.bold,
  },
};

const baseProductListColumns: Array<ColumnProps<any>> = [
  {
    title: 'Ürün Resmi',
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    render: (picture: any) => <img src={picture} height="100" width="100" />,
  },
  {
    title: 'Ürün Adı',
    dataIndex: 'productName',
    key: 'productName',
    sorter: true,
  },
  {
    title: 'Kategori',
    dataIndex: 'categoryName',
    key: 'categoryName',
    sorter: true,
  },
  {
    title: 'SKU',
    dataIndex: 'sku',
    key: 'sku',
    sorter: true,
  },
  {
    title: 'Stok Adedi',
    dataIndex: 'stock',
    key: 'stock',
    sorter: true,
  },
  {
    title: 'Fiyat',
    dataIndex: 'price',
    key: 'price',
    render: (price: any) => <span css={styles.price}>{price}₺</span>,
    sorter: true,
  },
  {
    title: 'Kampanya',
    dataIndex: 'fastShipping',
    key: 'campain',
    render: (campain: any) => (
      <Tag color={campain ? 'green' : 'red'}>{campain ? 'Evet' : 'Hayır'}</Tag>
    ),
    sorter: true,
  },
  {
    title: 'Hızlı Kargo',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    render: (fastShipping: any) => (
      <Tag color={fastShipping ? 'green' : 'red'}>{fastShipping ? 'Evet' : 'Hayır'}</Tag>
    ),
    sorter: true,
  },
];

export default baseProductListColumns;
