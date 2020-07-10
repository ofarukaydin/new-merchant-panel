import { createSelector } from '@reduxjs/toolkit';
import { SliceTypes } from 'Util/enums';
import { RootState } from 'Redux/store';

export const totalRecordsSelector = createSelector(
  (state: RootState) => state[SliceTypes.orders].searchOrderAsync.response?.totalCount,
  (totalCount) => totalCount,
);

export const paginatedDataSelector = createSelector(
  (state: RootState) => state[SliceTypes.orders].searchOrderAsync.response?.data,
  (data) => data,
);

export const loadingSelector = createSelector(
  (state: RootState) => state[SliceTypes.orders].searchOrderAsync.loading,
  (loading) => loading,
);
