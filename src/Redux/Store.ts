import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import productListSlice from 'Redux/ProductListSlice';
import { sliceTypes } from './Helpers/SliceTypes';
import reactotron from 'Util/Config/Reactotron';

const isDev = process.env.NODE_ENV !== 'production';

export const store = configureStore({
  reducer: {
    [sliceTypes.products]: productListSlice,
  },
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
