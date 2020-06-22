/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIndex } from 'Util/Util';
import { sliceNames, thunkActionTypes } from 'Redux/Helpers/SliceTypes';
import { SearchParams } from 'Util/Types';
import Api from 'Util/Api';

export interface IOrderList {
  paginatedData: any;
  params: SearchParams;
  pageCount: number;
  totalCount: number;
  sortIndex: number[];
  loading: boolean;
}

const initialState: IOrderList = {
  paginatedData: [],
  params: {
    pageIndex: 1,
    pageSize: 10,
    searchValue: '',
    orderDir: '',
    orderBy: '',
  },
  pageCount: 0,
  totalCount: 0,
  sortIndex: [0, 0],
  loading: false,
};

export const asyncGetOrders = createAsyncThunk(
  thunkActionTypes.getOrders,
  async (params: SearchParams, thunkAPI) => {
    try {
      const response = await Api.post('/Order/SearchOrderAsync', params);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('rejected');
    }
  },
);

export const orderListSlice = createSlice({
  name: sliceNames.orderList,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.paginatedData = action.payload.response;
      state.pageCount = action.payload.pageCount;
      state.totalCount = action.payload.totalCount;
      state.sortIndex = getIndex(action.payload.totalCount, action.payload.response, state.params);
    });
    builder.addCase(asyncGetOrders.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(asyncGetOrders.pending, (state, action) => {
      state.loading = true;
      state.params = action.meta.arg;
    });
  },
});

export default orderListSlice.reducer;
