import React, { memo, ReactText } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetOrders } from 'Redux/OrderListSlice';
import { Table } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';
import {
  totalRecordsSelector,
  paginatedDataSelector,
  loadingSelector,
} from 'Containers/OrderList/Selectors';
import { navigateTo } from 'Util/Util';
import { SearchParams } from 'Util/Types';
import { TablePaginationConfig } from 'antd/lib/table/interface';
import getOrderListColumns from 'Containers/OrderList/OrderListColumns';
import CustomHeader from 'Containers/OrderList/CustomHeader';

const ProductListConfig = ({ params }: { params: SearchParams }) => {
  const dispatch = useDispatch();

  const paginatedData = useSelector(paginatedDataSelector) ?? [];
  const totalRecords = useSelector(totalRecordsSelector);
  const loading = useSelector(loadingSelector);

  const mutatedParams = { ...params };

  useDeepCompareEffect(() => {
    dispatch(asyncGetOrders(mutatedParams));
  }, [mutatedParams]);

  const handleChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, ReactText[] | null>,
    sorter: any,
  ) => {
    mutatedParams.pageIndex = pagination.current || mutatedParams.pageIndex;
    mutatedParams.pageSize = pagination.pageSize || mutatedParams.pageSize;
    mutatedParams.orderBy = sorter.field || mutatedParams.orderBy;
    mutatedParams.orderDir = sorter.order || mutatedParams.orderDir;

    navigateTo('/orders', mutatedParams);
  };

  const handleSearch = (searchValue: string) => {
    mutatedParams.searchValue = searchValue;
    navigateTo('/orders', mutatedParams);
  };

  return (
    <>
      <CustomHeader handleSearch={handleSearch} params={params} />
      <Table
        onChange={handleChange}
        columns={getOrderListColumns(params)}
        rowKey={(row) => row.id}
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
