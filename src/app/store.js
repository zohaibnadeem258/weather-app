import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../services/weatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});