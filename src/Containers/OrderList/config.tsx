import React, { ReactText, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Table } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';

import { navigateTo } from 'Util/util';
import { OrderSearchQueryParams, useTypedSelector } from 'Util/types';
import { TablePaginationConfig } from 'antd/lib/table/interface';
import { SideDrawer } from 'Containers/OrderList/drawer';
import { CustomHeader } from 'Containers/OrderList/header-container';
import { getOrderListColumns } from 'Containers/OrderList/columns';
import { Actions, Selectors } from 'reduxypat';
import { OrderSearchResponseDTO } from 'reduxypat/lib/Api/api-types';

export const OrderlistConfig = ({ params }: { params: OrderSearchQueryParams }): JSX.Element => {
  const dispatch = useDispatch();

  const [drawerData, setDrawerData] = useState<OrderSearchResponseDTO>({});
  const [showDrawer, setShowDrawer] = useState(false);

  const orderTableData = useTypedSelector(Selectors.orders.orderTableSelector);

  const mutatedParams = { ...params };

  useDeepCompareEffect(() => {
    dispatch(Actions.orders.searchOrderAsync(mutatedParams));
  }, [mutatedParams]);

  useDeepCompareEffect(() => {
    const timer = setInterval(() => {
      dispatch(Actions.orders.searchOrderAsyncFake(mutatedParams));
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

  const openDrawerWith = (orderData: OrderSearchResponseDTO): void => {
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
        dataSource={orderTableData.response?.data || []}
        loading={orderTableData.loading}
        pagination={{
          pageSize: mutatedParams.pageSize,
          total: orderTableData.response?.totalCount,
          current: mutatedParams.pageIndex,
        }}
      />
    </>
  );
};
