import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import productListSlice from 'Redux/ProductListSlice';
import orderListSlice from 'Redux/OrderListSlice';
import authSlice from 'Redux/AuthSlice';
import { sliceTypes } from './Helpers/Enums';
import reactotron from 'Util/Config/Reactotron';

const isDev = process.env.NODE_ENV !== 'production';

const reducers = {
  [sliceTypes.auth]: authSlice,
  [sliceTypes.products]: productListSlice,
  [sliceTypes.orders]: orderListSlice,
};

export const store = configureStore({
  reducer: reducers,
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
