import { createSelector } from '@reduxjs/toolkit';
import { sliceTypes } from 'Redux/Helpers/Enums';
import { RootState } from 'Redux/Store';

export const totalRecordsSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].searchOrderAsync.response?.totalCount,
  (totalCount) => totalCount,
);

export const paginatedDataSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].searchOrderAsync.response?.data,
  (data) => data,
);

export const loadingSelector = createSelector(
  (state: RootState) => state[sliceTypes.orders].searchOrderAsync.loading,
  (loading) => loading,
);
