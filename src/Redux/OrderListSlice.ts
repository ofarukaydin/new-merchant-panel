/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sliceNames, thunkActionTypes } from 'Redux/Helpers/Enums';
import { SearchParams } from 'Util/Types';
import Api from 'Util/Api';

export interface IOrderList {
  paginatedData: any;
  params: SearchParams;
  totalCount: number;
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
  totalCount: 0,
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
      state.totalCount = action.payload.totalCount;
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
