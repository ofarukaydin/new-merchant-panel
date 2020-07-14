import React, { ReactText } from 'react';
import { useDispatch } from 'react-redux';
import { Table } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { navigateTo } from 'Util/util';
import { useTypedSelector, ProductSearchQueryParams } from 'Util/types';
import { TablePaginationConfig } from 'antd/lib/table/interface';
import { CustomHeader } from 'Containers/ProductList/header-container';
import { baseProductListColumns } from 'Containers/ProductList/columns';
import { Actions, Selectors } from 'reduxypat';

type PropTypes = {
  params: ProductSearchQueryParams;
};

export const ProductListConfig = ({ params }: PropTypes): JSX.Element => {
  const dispatch = useDispatch();

  const productTableSelector = useTypedSelector(Selectors.products.productTableSelector);

  const mutatedParams = { ...params };

  useDeepCompareEffect(() => {
    dispatch(Actions.products.getProductFilterList(mutatedParams));
  }, [mutatedParams]);

  const handleSearch = (searchValue: string): void => {
    mutatedParams.searchValue = searchValue;
    navigateTo('/products', mutatedParams);
  };

  const handleChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, ReactText[] | null>,
    sorter: any,
  ): void => {
    mutatedParams.pageIndex = pagination.current || mutatedParams.pageIndex;
    mutatedParams.pageSize = pagination.pageSize || mutatedParams.pageSize;
    mutatedParams.orderBy = sorter.field || mutatedParams.orderBy;
    mutatedParams.orderDir = sorter.order || mutatedParams.orderDir;

    navigateTo('/products', mutatedParams);
  };

  return (
    <>
      <CustomHeader handleSearch={handleSearch} />
      <Table
        onChange={handleChange}
        columns={baseProductListColumns}
        rowKey={(row) => row.productId!}
        dataSource={productTableSelector.response?.data || []}
        loading={productTableSelector.loading}
        pagination={{
          pageSize: mutatedParams.pageSize,
          total: productTableSelector.response?.totalCount,
          current: mutatedParams.pageIndex,
        }}
      />
    </>
  );
};
