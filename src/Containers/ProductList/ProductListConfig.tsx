import React, { memo, ReactText } from 'react';
import getProductListColumns from 'Containers/ProductList/ProductListColumns';
import CustomHeader from 'Containers/ProductList/CustomHeader';
import { useDispatch } from 'react-redux';
import { asyncGetProducts } from 'Redux/ProductListSlice';
import { Table } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';
import {
  totalRecordsSelector,
  paginatedDataSelector,
  loadingSelector,
} from 'Containers/ProductList/Selectors';
import { navigateTo } from 'Util/Util';
import { SearchParams } from 'Util/Types';
import { TablePaginationConfig } from 'antd/lib/table/interface';
import { useTypedSelector } from 'Redux/Helpers/HelperTypes';

const ProductListConfig = ({ params }: { params: SearchParams }) => {
  const dispatch = useDispatch();

  const paginatedData = useTypedSelector(paginatedDataSelector) ?? [];
  const totalRecords = useTypedSelector(totalRecordsSelector);
  const loading = useTypedSelector(loadingSelector);

  const mutatedParams = { ...params };

  useDeepCompareEffect(() => {
    /* dispatch(asyncGetProducts(mutatedParams)); */
  }, [mutatedParams]);

  const handleSearch = (searchValue: string) => {
    mutatedParams.searchValue = searchValue;
    navigateTo('/products', mutatedParams);
  };

  const handleChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, ReactText[] | null>,
    sorter: any,
  ) => {
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
        columns={getProductListColumns}
        rowKey={(row) => row.productId}
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

export default memo(ProductListConfig);
