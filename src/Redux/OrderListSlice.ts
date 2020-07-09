/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, AnyAction, SerializedError } from '@reduxjs/toolkit';
import { sliceNames, thunkActionTypes } from 'Redux/Helpers/Enums';
import Api, { generateThunk } from 'Util/Api';
import { IOrderState, ResponseModel } from 'Redux/Helpers/StateTypes';

const initialState: IOrderState = {
  searchOrderAsync: ResponseModel,
};

export const asyncGetOrders = generateThunk(
  thunkActionTypes.getOrders,
  Api.v1OrderSearchorderasyncCreate,
);

export const orderListSlice = createSlice({
  name: sliceNames.orderList,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('order') && action.type.endsWith('/fulfilled'),
      (state, action) => {
        const subSlice: keyof IOrderState = action.type.split('/')[1];
        state[subSlice] = { ...action.payload, loading: false };
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('order') && action.type.endsWith('/pending'),
      (state, action) => {
        const subSlice: keyof IOrderState = action.type.split('/')[1];

        state[subSlice] = { ...initialState[subSlice], loading: true };
      },
    );

    builder.addMatcher(
      (action: AnyAction): action is AnyAction & { meta: { error: SerializedError } } =>
        action.type.startsWith('order') && action.type.endsWith('/rejected'),
      (state, action) => {
        const subSlice: keyof IOrderState = action.type.split('/')[1];

        state[subSlice] = { ...action.payload, loading: false };
      },
    );
  },
});

export default orderListSlice.reducer;
