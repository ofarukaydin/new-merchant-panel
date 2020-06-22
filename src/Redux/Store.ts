import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import productListSlice from 'Redux/ProductListSlice';
import orderListSlice from 'Redux/OrderListSlice';

import { sliceTypes } from './Helpers/SliceTypes';
import reactotron from 'Util/Config/Reactotron';
import { addReducerToListReducer } from 'edkk-redux';

const isDev = process.env.NODE_ENV !== 'production';

const combinedReducers = addReducerToListReducer({
  [sliceTypes.products]: productListSlice,
  [sliceTypes.orders]: orderListSlice,
});

export const store = configureStore({
  reducer: combinedReducers,
  middleware: [...getDefaultMiddleware()],
  enhancers: (defaultEnhancers) =>
    (typeof reactotron.createEnhancer === 'function' && [
      reactotron.createEnhancer(!isDev),
      ...defaultEnhancers,
    ]) || [...defaultEnhancers],
  devTools: isDev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
