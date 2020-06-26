import { createSelector } from '@reduxjs/toolkit';
import { sliceTypes } from 'Redux/Helpers/SliceTypes';
import { RootState } from 'Redux/Store';

export const totalRecordsSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].present.totalCount,
  (totalCount) => totalCount,
);

export const paginatedDataSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].present.paginatedData,
  (data) => data,
);

export const loadingSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].present.loading,
  (loading) => loading,
);

export const oldTotalRecordsSelector = createSelector(
  (state: RootState) =>
    state[sliceTypes.orders].past[state[sliceTypes.orders].past.length - 1]?.totalCount,
  (totalCount) => totalCount,
);
