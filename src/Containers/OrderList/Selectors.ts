import { createSelector } from '@reduxjs/toolkit';
import { sliceTypes } from 'Redux/Helpers/SliceTypes';
import { RootState } from 'Redux/Store';

export const totalPagesSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].pageCount,
  (pageCount) => pageCount,
);

export const totalRecordsSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].totalCount,
  (totalCount) => totalCount,
);

export const sortIndexSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].sortIndex,
  (sortIndex) => sortIndex,
);

export const paginatedDataSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].paginatedData,
  (data) => data,
);

export const rowsPerPageSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].params.pageSize,
  (rowsPerPage) => rowsPerPage,
);

export const loadingSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].loading,
  (loading) => loading,
);
