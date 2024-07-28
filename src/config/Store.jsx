import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './Slice';

const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});

export default store;