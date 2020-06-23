import { createSelector } from '@reduxjs/toolkit';
import { sliceTypes } from 'Redux/Helpers/SliceTypes';
import { RootState } from 'Redux/Store';

export const totalRecordsSelector = createSelector(
  (state: RootState) => state[sliceTypes.products].totalCount,
  (totalCount) => totalCount,
);

export const paginatedDataSelector = createSelector(
  (state: RootState) => state[sliceTypes.products].paginatedData,
  (data) => data,
);

export const loadingSelector = createSelector(
  (state: RootState) => state[sliceTypes.products].loading,
  (loading) => loading,
);
