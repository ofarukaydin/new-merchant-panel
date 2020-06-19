import React, { useState, memo } from 'react';
import DataTable from 'react-data-table-component';
import ReactPaginate from 'react-paginate';
import { ChevronDown, Check, ChevronLeft, ChevronRight } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetProducts } from 'Redux/ProductListSlice';
import { Checkbox, Spin } from 'antd';
import CustomHeader from 'Containers/ProductList/CustomHeader';
import useDeepCompareEffect from 'use-deep-compare-effect';
import {
  sortIndexSelector,
  totalPagesSelector,
  totalRecordsSelector,
  rowsPerPageSelector,
  paginatedDataSelector,
  loadingSelector,
} from 'Containers/ProductList/Selectors';
import getProductListColumns from 'Containers/ProductList/ProductListColumns';
import { navigateTo } from 'Util/Util';
import { SearchParams } from 'Util/Types';

const ProductListConfig = ({ params }: { params: SearchParams }) => {
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
    dispatch(asyncGetProducts(mutatedParams));
  }, [mutatedParams]);

  const handleFilter = (value: string) => {
    if (value !== mutatedParams.searchValue) {
      mutatedParams.searchValue = value;
      navigateTo('/products', mutatedParams);
    }
  };

  const handleRowsPerPage = (value: number) => {
    mutatedParams.pageIndex = 1;
    mutatedParams.pageSize = value;
    navigateTo('/products', mutatedParams);
  };

  const handlePagination = (page: any) => {
    mutatedParams.pageIndex = page.selected + 1;
    navigateTo('/products', mutatedParams);
  };

  const handleSort = (column: any, sortDirection: string) => {
    mutatedParams.orderBy = column.selector;
    mutatedParams.orderDir = sortDirection;
    navigateTo('/products', mutatedParams);
  };

  return (
    <DataTable
      columns={getProductListColumns('thumbView')}
      data={paginatedData}
      progressPending={loading}
      progressComponent={
        <div className="p-4 m-4">
          <Spin size="large" />
        </div>
      }
      noDataComponent={<div className="p-2">Herhangi bir veri bulunamadı</div>}
      pagination
      paginationServer
      paginationComponent={() => (
        <ReactPaginate
          previousLabel={<ChevronLeft size={15} />}
          nextLabel={<ChevronRight size={15} />}
          breakLabel="..."
          breakClassName="break-me"
          pageCount={totalPages}
          containerClassName="flex justify-end mt-8"
          activeClassName="text-primary"
          pageClassName="px-2"
          forcePage={mutatedParams.pageIndex - 1}
          onPageChange={(page) => handlePagination(page)}
          marginPagesDisplayed={10}
          pageRangeDisplayed={10}
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
        icon: <Check className="vx-icon" size={12} />,
        label: '',
        size: 'sm',
      }}
    />
  );
};

export default memo(ProductListConfig);
