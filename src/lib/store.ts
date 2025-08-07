import { configureStore } from '@reduxjs/toolkit';
import favoutriteReducer from './features/favoutriteSlice';

export const store = configureStore({
  reducer: {
    favourites: favoutriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
