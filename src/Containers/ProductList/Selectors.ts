import { createSelector } from '@reduxjs/toolkit';
import { sliceTypes } from 'Redux/Helpers/SliceTypes';
import { RootState } from 'Redux/Store';

export const totalPagesSelector = createSelector(
  (state: RootState) => state[sliceTypes.products].pageCount,
  (pageCount) => pageCount,
);

export const totalRecordsSelector = createSelector(
  (state: RootState) => state[sliceTypes.products].totalCount,
  (totalCount) => totalCount,
);

export const sortIndexSelector = createSelector(
  (state: RootState) => state[sliceTypes.products].sortIndex,
  (sortIndex) => sortIndex,
);

export const paginatedDataSelector = createSelector(
  (state: RootState) => state[sliceTypes.products].paginatedData,
  (data) => data,
);

export const rowsPerPageSelector = createSelector(
  (state: RootState) => state[sliceTypes.products].params.pageSize,
  (rowsPerPage) => rowsPerPage,
);

export const loadingSelector = createSelector(
  (state: RootState) => state[sliceTypes.products].loading,
  (loading) => loading,
);
