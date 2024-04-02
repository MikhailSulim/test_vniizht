import { configureStore } from '@reduxjs/toolkit';
import { trainsReducer } from './trainsSlice';

export const store = configureStore({
  reducer: trainsReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppDispatch = typeof store.dispatch;
