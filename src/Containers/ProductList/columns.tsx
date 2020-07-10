import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { CSSObject } from '@emotion/core';
import { ThemeConfig } from 'Util/theme-config';
import { Tag } from 'antd';
import { ProductFilterResponseDTO } from 'Redux/Helpers/api-types';

const styles: CSSObject = {
  price: {
    fontSize: ThemeConfig.FontSize.xl,
    fontWeight: ThemeConfig.FontWeight.bold,
  },
};

export const baseProductListColumns: Array<ColumnProps<ProductFilterResponseDTO>> = [
  {
    title: 'Ürün Resmi',
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    render: (
      picture: ProductFilterResponseDTO['imageUrl'],
      record: ProductFilterResponseDTO,
    ): JSX.Element => (
      <img src={picture || ''} height="100" width="100" alt={record.productName || ''} />
    ),
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
    render: (price: ProductFilterResponseDTO['price']): JSX.Element => (
      <span css={styles.price}>{price || 0}₺</span>
    ),
    sorter: true,
  },
  {
    title: 'Kampanya',
    dataIndex: 'fastShipping',
    key: 'campain',
    render: (campain: ProductFilterResponseDTO['campain']): JSX.Element => (
      <Tag color={campain ? 'green' : 'red'}>{campain ? 'Evet' : 'Hayır'}</Tag>
    ),
    sorter: true,
  },
  {
    title: 'Hızlı Kargo',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    render: (fastShipping: ProductFilterResponseDTO['fastShipping']): JSX.Element => (
      <Tag color={fastShipping ? 'green' : 'red'}>{fastShipping ? 'Evet' : 'Hayır'}</Tag>
    ),
    sorter: true,
  },
];
