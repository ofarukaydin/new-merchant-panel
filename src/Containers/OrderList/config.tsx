import React, { ReactText, useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncGetOrders, asyncGetOrdersFake } from 'Redux/orders-slice';
import { Table } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';
import {
  totalRecordsSelector,
  paginatedDataSelector,
  loadingSelector,
} from 'Containers/OrderList/selectors';
import { navigateTo } from 'Util/util';
import { SearchParams, useTypedSelector } from 'Util/types';
import { TablePaginationConfig } from 'antd/lib/table/interface';
import { SideDrawer } from 'Containers/OrderList/drawer';
import { CustomHeader } from 'Containers/OrderList/header-container';
import { getOrderListColumns } from 'Containers/OrderList/columns';
import { OrderResponseDTO } from 'Redux/Helpers/api-types';

export const OrderlistConfig = ({ params }: { params: SearchParams }): JSX.Element => {
  const dispatch = useDispatch();

  const [drawerData, setDrawerData] = useState<OrderResponseDTO>({});
  const [showDrawer, setShowDrawer] = useState(false);

  const paginatedData = useTypedSelector(paginatedDataSelector) ?? [];
  const totalRecords = useTypedSelector(totalRecordsSelector);
  const loading = useTypedSelector(loadingSelector);

  const mutatedParams = { ...params };

  useDeepCompareEffect(() => {
    dispatch(asyncGetOrders(mutatedParams));
  }, [mutatedParams]);

  useDeepCompareEffect(() => {
    const timer = setInterval(() => {
      dispatch(asyncGetOrdersFake(mutatedParams));
    }, 4000);

    return () => clearTimeout(timer);
  }, [mutatedParams]);

  const handleChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, ReactText[] | null>,
    sorter: any,
  ): void => {
    mutatedParams.pageIndex = pagination.current || mutatedParams.pageIndex;
    mutatedParams.pageSize = pagination.pageSize || mutatedParams.pageSize;
    mutatedParams.orderBy = sorter.field || mutatedParams.orderBy;
    mutatedParams.orderDir = sorter.order || mutatedParams.orderDir;

    navigateTo('/orders', mutatedParams);
  };

  const handleSearch = (searchValue: string): void => {
    mutatedParams.searchValue = searchValue;
    navigateTo('/orders', mutatedParams);
  };

  const openDrawerWith = (orderData: OrderResponseDTO): void => {
    setDrawerData(orderData);
    setShowDrawer(true);
  };

  return (
    <>
      <CustomHeader handleSearch={handleSearch} params={params} />
      <SideDrawer
        orderData={drawerData}
        onClose={() => setShowDrawer(false)}
        visible={showDrawer}
        params={mutatedParams}
      />
      <Table
        onChange={handleChange}
        columns={getOrderListColumns(params, openDrawerWith)}
        rowKey={(row) => row.id!}
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
