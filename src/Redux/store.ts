import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Slices } from 'reduxypat';

const isDev = process.env.NODE_ENV !== 'production';

const reducers = {
  ...Slices,
};

export const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware()],
  devTools: isDev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
