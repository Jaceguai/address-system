import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './addresses/addressSlice';

export const store = configureStore({
  reducer: {
    addresses: addressReducer,
  },
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
