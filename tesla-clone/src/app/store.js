import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import carReducers from "../features/car/carSlice"



export const store = configureStore({
  reducer: {
    car: carReducers,
  },
});
