import React, { ReactText } from 'react';
import { useDispatch } from 'react-redux';
import { asyncGetProducts } from 'Redux/products-slice';
import { Table } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';
import {
  totalRecordsSelector,
  paginatedDataSelector,
  loadingSelector,
} from 'Containers/ProductList/selectors';
import { navigateTo } from 'Util/util';
import { useTypedSelector, ProductSearchQueryParams } from 'Util/types';
import { TablePaginationConfig } from 'antd/lib/table/interface';
import { CustomHeader } from 'Containers/ProductList/header-container';
import { baseProductListColumns } from 'Containers/ProductList/columns';

type PropTypes = {
  params: ProductSearchQueryParams;
};

export const ProductListConfig = ({ params }: PropTypes): JSX.Element => {
  const dispatch = useDispatch();

  const paginatedData = useTypedSelector(paginatedDataSelector) ?? [];
  const totalRecords = useTypedSelector(totalRecordsSelector);
  const loading = useTypedSelector(loadingSelector);

  const mutatedParams = { ...params };

  useDeepCompareEffect(() => {
    dispatch(asyncGetProducts(mutatedParams));
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
        dataSource={paginatedData}
        loading={loading}
        pagination={{
          pageSize: mutatedParams.pageSize,
          total: totalRecords,
          current: mutatedParams.pageIndex,
        }}
      />
    </>
  );
};
