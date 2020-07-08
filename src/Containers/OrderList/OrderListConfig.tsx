import React, { memo, ReactText, useState, useRef, ReactInstance } from 'react';
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
import SideDrawer from 'Containers/OrderList/SideDrawer';
import { OrderResponseDTO } from 'Redux/Helpers/ApiTypes';

class EmptyComponent extends React.Component {
  render() {
    return null;
  }
}

const ProductListConfig = ({ params }: { params: SearchParams }) => {
  const dispatch = useDispatch();

  const [drawerData, setDrawerData] = useState<OrderResponseDTO>({});
  const [showDrawer, setShowDrawer] = useState(false);

  const paginatedData: any = useSelector(paginatedDataSelector);
  const totalRecords: number = useSelector(totalRecordsSelector);
  const loading: boolean = useSelector(loadingSelector);
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

  const openDrawerWith = (orderData: OrderResponseDTO) => {
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
