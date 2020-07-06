/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sliceNames, thunkActionTypes } from 'Redux/Helpers/Enums';
import { SearchParams } from 'Util/Types';
import Api from 'Util/Api';

export interface IProductList {
  paginatedData: any;
  params: SearchParams;
  totalCount: number;
  loading: boolean;
}

const initialState: IProductList = {
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

export const asyncGetProducts = createAsyncThunk(
  thunkActionTypes.getProducts,
  async (params: SearchParams, thunkAPI) => {
    try {
      const response = await Api.v1ProductGetproductfilterlistList();
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue('rejected');
    }
  },
);

export const productListSlice = createSlice({
  name: sliceNames.productList,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.paginatedData = action.payload.response;
      state.totalCount = action.payload.totalCount as number;
    });
    builder.addCase(asyncGetProducts.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(asyncGetProducts.pending, (state, action) => {
      state.loading = true;
      state.params = action.meta.arg;
    });
  },
});

export default productListSlice.reducer;
