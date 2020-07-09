/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { SearchParams } from 'Util/Types';
import Api, { generateThunk } from 'Util/Api';
import { thunkActionTypes, sliceNames } from 'Redux/Helpers/Enums';

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

export const asyncGetProducts = generateThunk(
  thunkActionTypes.getProducts,
  Api.v1ProductGetproductfilterlistList,
);

export const productListSlice = createSlice({
  name: sliceNames.productList,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncGetProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.paginatedData = action.payload.response;
      state.totalCount = action.payload.totalCount!;
    });
    builder.addCase(asyncGetProducts.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(asyncGetProducts.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default productListSlice.reducer;
