/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIndex } from 'Util/Util';
import { sliceNames, thunkActionTypes } from 'Redux/Helpers/SliceTypes';
import { SearchParams } from 'Util/Types';
import Api from 'Util/Api';

export interface IProductList {
  paginatedData: any;
  params: SearchParams;
  pageCount: number;
  totalCount: number;
  sortIndex: number[];
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
  pageCount: 0,
  totalCount: 0,
  sortIndex: [0, 0],
  loading: false,
};

export const asyncGetProducts = createAsyncThunk(
  thunkActionTypes.getProducts,
  async (params: SearchParams, thunkAPI) => {
    try {
      const response = await Api.post('/product/getproductfilterlistasync', params);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('rejected');
    }
  },
);

export const productListSlice = createSlice({
  name: sliceNames.productList,
  initialState,
  reducers: {
    getData: (state, action) => {
      state.paginatedData = action.payload.response;
      state.pageCount = action.payload.pageCount;
      state.totalCount = action.payload.totalCount;
      state.params = action.payload.params;
      state.sortIndex = getIndex(
        action.payload.totalCount,
        action.payload.response,
        action.payload.params,
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.paginatedData = action.payload.response;
      state.pageCount = action.payload.pageCount;
      state.totalCount = action.payload.totalCount;
      state.sortIndex = getIndex(action.payload.totalCount, action.payload.response, state.params);
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

export const { getData, setLoading } = productListSlice.actions;

export default productListSlice.reducer;
