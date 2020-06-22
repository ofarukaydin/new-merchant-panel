import React, { useState, memo } from 'react';
import DataTable from 'react-data-table-component';
import ReactPaginate from 'react-paginate';
import { ChevronDown, Check, ChevronLeft, ChevronRight } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetOrders } from 'Redux/OrderListSlice';
import { Checkbox, Spin } from 'antd';
import CustomHeader from 'Containers/OrderList/CustomHeader';
import useDeepCompareEffect from 'use-deep-compare-effect';
import {
  sortIndexSelector,
  totalPagesSelector,
  totalRecordsSelector,
  rowsPerPageSelector,
  paginatedDataSelector,
  loadingSelector,
} from 'Containers/OrderList/Selectors';
import getOrderListColumns from 'Containers/OrderList/OrderListColumns';
import { navigateTo } from 'Util/Util';
import { SearchParams } from 'Util/Types';

const OrderListConfig = ({ params }: { params: SearchParams }) => {
  const [selectedRows, setSelectedRows] = useState<unknown>([]);

  const dispatch = useDispatch();

  const paginatedData: any = useSelector(paginatedDataSelector);
  const totalPages: number = useSelector(totalPagesSelector);
  const totalRecords: number = useSelector(totalRecordsSelector);
  const sortIndex: number[] = useSelector(sortIndexSelector);
  const rowsPerPage: number = useSelector(rowsPerPageSelector);
  const loading: boolean = useSelector(loadingSelector);

  const mutatedParams = { ...params };
  useDeepCompareEffect(() => {
    dispatch(asyncGetOrders(mutatedParams));
  }, [mutatedParams]);

  const handleFilter = (value: string) => {
    if (value !== mutatedParams.searchValue) {
      mutatedParams.searchValue = value;
      navigateTo('/orders', mutatedParams);
    }
  };

  const handleRowsPerPage = (value: number) => {
    mutatedParams.pageIndex = 1;
    mutatedParams.pageSize = value;
    navigateTo('/orders', mutatedParams);
  };

  const handlePagination = (page: any) => {
    mutatedParams.pageIndex = page.selected + 1;
    navigateTo('/orders', mutatedParams);
  };

  const handleSort = (column: any, sortDirection: string) => {
    mutatedParams.orderBy = column.selector;
    mutatedParams.orderDir = sortDirection;
    navigateTo('/orders', mutatedParams);
  };

  return (
    <DataTable
      columns={getOrderListColumns(params)}
      data={paginatedData}
      progressPending={loading}
      progressComponent={
        <div className="tw-p-4 tw-m-4">
          <Spin size="large" />
        </div>
      }
      noDataComponent={<div className="tw-p-2">Herhangi bir veri bulunamadı</div>}
      pagination
      paginationServer
      paginationComponent={() => (
        <ReactPaginate
          previousLabel={<ChevronLeft size={15} />}
          nextLabel={<ChevronRight size={15} />}
          breakLabel="..."
          pageCount={totalPages}
          containerClassName="tw-flex tw-justify-end tw-mt-8 tw-items-center"
          activeClassName="tw-text-primary"
          pageClassName="tw-px-2"
          forcePage={mutatedParams.pageIndex - 1}
          onPageChange={(page) => handlePagination(page)}
          marginPagesDisplayed={3}
          pageRangeDisplayed={2}
        />
      )}
      noHeader
      subHeader
      selectableRows
      responsive
      pointerOnHover
      selectableRowsHighlight
      onSelectedRowsChange={(rows) => setSelectedRows(rows.selectedRows)}
      subHeaderComponent={
        <CustomHeader
          handleFilter={handleFilter}
          handleRowsPerPage={handleRowsPerPage}
          rowsPerPage={rowsPerPage}
          total={totalRecords}
          index={sortIndex}
          selectedRows={selectedRows}
          params={mutatedParams}
        />
      }
      sortIcon={<ChevronDown />}
      sortServer
      onSort={handleSort}
      selectableRowsComponent={Checkbox}
      selectableRowsComponentProps={{
        color: 'primary',
        icon: <Check size={12} />,
        label: '',
        size: 'sm',
      }}
    />
  );
};

export default memo(OrderListConfig);
