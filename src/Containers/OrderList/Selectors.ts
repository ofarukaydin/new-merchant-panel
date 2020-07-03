import { createSelector } from '@reduxjs/toolkit';
import { sliceTypes } from 'Redux/Helpers/Enums';
import { RootState } from 'Redux/Store';

export const totalRecordsSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].totalCount,
  (totalCount) => totalCount,
);

export const paginatedDataSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].paginatedData,
  (data) => data,
);

export const loadingSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].loading,
  (loading) => loading,
);
