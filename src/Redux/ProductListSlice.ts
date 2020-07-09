/* eslint-disable no-param-reassign */
import { createSlice, AnyAction, SerializedError } from '@reduxjs/toolkit';
import Api, { generateThunk } from 'Util/Api';
import { thunkActionTypes, sliceNames } from 'Redux/Helpers/Enums';
import { ResponseModel, IProductState } from 'Redux/Helpers/StateTypes';

const initialState: IProductState = {
  getProductFilterList: ResponseModel,
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
    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('product') && action.type.endsWith('/fulfilled'),
      (state, action) => {
        const subSlice: keyof IProductState = action.type.split('/')[1];
        state[subSlice] = { ...action.payload, loading: false };
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('product') && action.type.endsWith('/pending'),
      (state, action) => {
        const subSlice: keyof IProductState = action.type.split('/')[1];

        state[subSlice] = { ...initialState[subSlice], loading: true };
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('product') && action.type.endsWith('/rejected'),
      (state, action) => {
        const subSlice: keyof IProductState = action.type.split('/')[1];

        state[subSlice] = { ...action.payload, loading: false };
      },
    );
  },
});

export default productListSlice.reducer;
