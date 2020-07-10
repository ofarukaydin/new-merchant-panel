import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { productsSlice } from 'Redux/products-slice';
import { ordersSlice } from 'Redux/orders-slice';
import { authSlice } from 'Redux/auth-slice';
import { SliceTypes } from 'Util/enums';
import { statisticsSlice } from 'Redux/statistics-slice';

const isDev = process.env.NODE_ENV !== 'production';

const reducers = {
  [SliceTypes.auth]: authSlice,
  [SliceTypes.products]: productsSlice,
  [SliceTypes.orders]: ordersSlice,
  [SliceTypes.stats]: statisticsSlice,
};

export const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware()],
  devTools: isDev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
